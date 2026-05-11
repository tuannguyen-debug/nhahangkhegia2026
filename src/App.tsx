import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Utensils, Menu, X, Facebook, ChevronRight, CheckCircle2, Leaf, Users, Star, ArrowRight, Heart } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('main');
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    occasion: 'Gia đình',
    notes: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingSuccess(true);
    setTimeout(() => {
      setIsBookingSuccess(false);
      setBookingFormData({
        name: '', phone: '', guests: '', date: '', occasion: 'Gia đình', notes: ''
      });
    }, 5000);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      {/* Header */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-stone-900/40 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
              KG
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-emerald-800' : 'text-white'}`}>
              Khe Giao
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {['Giới thiệu', 'Món nổi bật', 'Thực đơn', 'Đánh giá'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase() === 'giới thiệu' ? 'about' : item.toLowerCase() === 'món nổi bật' ? 'featured' : item.toLowerCase() === 'thực đơn' ? 'menu' : 'reviews')}
                className={`text-sm font-medium hover:text-emerald-500 transition-colors ${scrolled ? 'text-stone-600' : 'text-stone-200'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0384311368" className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-amber-700' : 'text-amber-300'}`}>
              <Phone className="w-4 h-4" />
              0384 311 368
            </a>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              Đặt bàn ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 ${scrolled ? 'text-stone-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 py-4 px-4 flex flex-col gap-4">
            {['Giới thiệu', 'Món nổi bật', 'Thực đơn', 'Đánh giá'].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase() === 'giới thiệu' ? 'about' : item.toLowerCase() === 'món nổi bật' ? 'featured' : item.toLowerCase() === 'thực đơn' ? 'menu' : 'reviews')}
                className="text-left text-stone-700 font-medium py-2 border-b border-stone-50"
              >
                {item}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a href="tel:0384311368" className="flex items-center justify-center gap-2 w-full border-2 border-stone-200 text-stone-700 py-3 rounded-xl font-medium">
                <Phone className="w-5 h-5" />
                Gọi: 0384 311 368
              </a>
              <button 
                onClick={() => scrollToSection('booking')}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold shadow-sm"
              >
                Đặt bàn ngay
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0">
           <img 
             src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
             alt="Bàn tiệc món ngon Khe Giao" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-stone-900/65 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start max-w-4xl lg:mx-0 lg:ml-auto xl:ml-[10%]">
          <span className="inline-block py-1 pr-4 pl-1 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium mb-6 flex items-center gap-2 w-fit mx-auto lg:mx-0">
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-bold">Hot</span>
            Ẩm Thực Khe Giao – Bản Giao Hưởng Hương Vị Quê Nhà
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Đặc Sản Gà Đồi <br className="hidden lg:block"/>
            <span className="text-amber-400">Hương Vị Quê Nhà</span> <br/>
            Giữa Không Gian Xanh
          </h1>
          <p className="text-stone-200 text-lg md:text-xl md:leading-relaxed mb-8 max-w-2xl text-center lg:text-left">
            Thưởng thức gà đồi nướng than hoa, gà đen nướng ống tre, cá suối, rau rừng và các món đặc sản núi rừng trong không gian sân vườn thoáng mát, ấm cúng.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
            >
              Đặt bàn ngay <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              Xem thực đơn
            </button>
          </div>
          
          <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-white/90">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 bg-stone-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Khách hàng" className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-amber-400 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-semibold">Hàng ngàn</span> thực khách tin chọn
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white relative z-20 -mt-8 rounded-t-3xl shadow-xl max-w-7xl mx-auto xl:border xl:border-stone-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-8 h-8 text-emerald-600"/>, title: "Nguyên liệu tươi", desc: "Thực phẩm nhập mới mỗi ngày, đảm bảo sạch và an toàn." },
              { icon: <Utensils className="w-8 h-8 text-amber-600"/>, title: "Đặc sản chuẩn vị", desc: "Gà đồi, gà đen chế biến theo công thức bản địa đặc trưng." },
              { icon: <MapPin className="w-8 h-8 text-emerald-600"/>, title: "Không gian sân vườn", desc: "Thoáng mát, rộng rãi, gần gũi và hòa mình với thiên nhiên." },
              { icon: <Users className="w-8 h-8 text-amber-600"/>, title: "Đa dạng tiệc tùng", desc: "Phù hợp bữa ăn gia đình, bạn bè, khách đoàn, lễ cưới." },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors">
                <div className="p-3 bg-stone-100/80 rounded-xl shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1 mt-1 text-lg">{benefit.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] transform rotate-3 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="Không gian nhà hàng" 
                className="rounded-3xl shadow-xl object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold tracking-tight text-lg">Tận tâm</p>
                    <p className="text-xs text-stone-500 uppercase font-semibold">từng món ăn</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <p className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-3">Về Khe Giao</p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 tracking-tight">
                Nơi lưu giữ trọn vẹn <br/><span className="text-amber-600">hương vị dân dã</span>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Nhà hàng Khe Giao là điểm đến dành cho những ai yêu thích ẩm thực truyền thống Việt Nam. Chúng tôi chắt lọc những gì tinh túy nhất từ sản vật địa phương để mang đến bữa ăn trọn vẹn cho bạn và người thân.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Từ gà đồi, cá suối, rau rừng đến các món nướng than hoa, hấp, chiên mắm, tất cả được chế biến chỉn chu để giữ trọn hương vị dân dã, đậm đà và gần gũi.
              </p>
              
              <ul className="space-y-4 mb-8">
                {['Đầu bếp địa phương giàu kinh nghiệm', 'Không gian đậu xe vô cùng rộng rãi', 'Phục vụ chu đáo, tận tình'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <button onClick={() => scrollToSection('booking')} className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors group">
                Đặt bàn ngay hôm nay 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="featured" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 tracking-tight">Món Ngon Nổi Bật</h2>
            <p className="text-stone-500 text-lg">Những đặc sản làm nên tên tuổi của Khe Giao, được thực khách yêu thích và gọi nhiều nhất.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Đặc sản gà đồi Khe Giao", price: "349k", desc: "Gà đồi thả rông thịt chắc ngọt, ăn kèm xôi nếp nương và rau củ, phù hợp nhóm gia đình.", img: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Best Seller" },
              { name: "Gà mẹt núi rừng", price: "799k", desc: "Thiết kế đa dạng món: chiên mắm, hấp lá chanh, nướng ống tre. Tặng kèm 1 nồi miến gà thanh ngọt.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: "Cho khách đoàn" },
              { name: "Gà đen nướng than hoa", price: "400k", desc: "Lớp da giòn rụm màu cánh gián, thịt ngọt thấm vị sốt ướp bí truyền nướng xém trên than hoa.", img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Gà đen nướng ống tre", price: "400k", desc: "Hương vị thơm lừng đặc trưng từ tre tươi, thịt gà giữ trọn độ ẩm, mềm tan và đậm vị núi rừng.", img: "https://images.unsplash.com/photo-1626804475297-4160aaeaba1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Thịt thỏ rô-ti/nướng", price: "Thời giá", desc: "Món đặc sản núi rừng thay đổi vị giác. Thịt thỏ săn chắc, tẩm ướp đậm đà, thơm nức mũi.", img: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Cá suối chiên giòn", price: "180k", desc: "Cá suối tươi bắt trong ngày, chiên giòn rụm nhai cả xương, chấm cùng mắm me chua ngọt.", img: "https://images.unsplash.com/photo-1599879743905-ebfe0b2496a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            ].map((dish, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {dish.tag && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {dish.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 font-bold px-3 py-1.5 rounded-lg shadow-sm">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-stone-800 mb-2">{dish.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">{dish.desc}</p>
                  <button onClick={() => scrollToSection('booking')} className="w-full flex items-center justify-center gap-2 border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-600 hover:text-white py-2.5 rounded-xl font-medium transition-colors">
                    Đặt mâm ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combos */}
      <section className="py-20 bg-stone-900 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-2">Gợi ý đặt bàn</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Combo Trọn Vị</h2>
            <p className="text-stone-400">Các gói thực đơn được thiết kế sẵn giúp quý khách dễ dàng lựa chọn cho các quy mô tiệc khác nhau.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Bữa Gia Đình", size: "4 - 6 người", desc: "Đủ vị ngon, tròn tình thân.", items: ["1 Gà đồi nướng than hoa", "Rau rừng xào tỏi", "Xôi chim", "Canh măng chua", "Hoa quả tráng miệng"] },
              { name: "Tiệc Bạn Bè", size: "6 - 10 người", desc: "Đậm đà hương vị núi rừng.", items: ["Mẹt gà 7 món đặc biệt", "Cá suối chiên giòn", "Nộm hoa chuối tai heo", "Lẩu gà lá giang", "Nước suối / Nước ngọt"], popular: true },
              { name: "Khách Đoàn / Tiệc", size: "Từ 10+ người", desc: "Thực đơn thiết kế riêng.", items: ["Đa dạng lựa chọn theo ngân sách", "Giá cả ưu đãi đặc biệt", "Không gian riêng tư rộng rãi", "Hỗ trợ set up âm thanh, ánh sáng", "Có VAT cho công ty"] },
            ].map((combo, idx) => (
              <div key={idx} className={`rounded-3xl p-8 flex flex-col ${combo.popular ? 'bg-emerald-800 border items-center text-center border-emerald-600 shadow-2xl relative transform md:-translate-y-4' : 'bg-stone-800 border border-stone-700'}`}>
                {combo.popular && (
                  <div className="absolute -top-4 bg-amber-500 text-stone-900 font-bold text-sm px-4 py-1.5 rounded-full">Được chọn nhiều nhất</div>
                )}
                <h3 className="text-2xl font-bold mb-1">{combo.name}</h3>
                <p className={`text-sm mb-4 ${combo.popular ? 'text-emerald-200' : 'text-stone-400'}`}><Users className="w-4 h-4 inline mr-1 -mt-0.5"/> {combo.size}</p>
                <p className="italic text-stone-300 mb-6 pb-6 border-b border-stone-700/50 w-full">{combo.desc}</p>
                
                <ul className="space-y-4 mb-8 flex-1 w-full flex flex-col items-start text-left">
                  {combo.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 w-full">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${combo.popular ? 'text-amber-400' : 'text-emerald-500'}`} />
                      <span className="text-stone-200">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button onClick={() => scrollToSection('booking')} className={`w-full py-4 rounded-xl font-bold transition-all ${combo.popular ? 'bg-amber-500 hover:bg-amber-400 text-stone-900' : 'bg-stone-700 hover:bg-stone-600 text-white'}`}>
                  Tư vấn thực đơn
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Menu Tabs */}
      <section id="menu" className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 tracking-tight">Thực Đơn Tóm Tắt</h2>
            <p className="text-stone-500">Ngoài các đặc sản, Khe Giao phục vụ menu đa dạng phong phú.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-stone-200 pb-1">
            {[
              { id: 'main', label: 'Món Chính' },
              { id: 'starter', label: 'Khai Vị & Rau' },
              { id: 'hotpot', label: 'Lẩu Ngon' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold text-lg transition-all border-b-2 -mb-[1px] ${
                  activeTab === tab.id 
                    ? 'border-emerald-600 text-emerald-700' 
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-stone-100">
            {activeTab === 'main' && (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {['Gà đồi nướng than hoa', 'Gà đen nướng ống tre', 'Gà mẹt 7 món', 'Thịt thỏ rô-ti', 'Thỏ xào lăn sả ớt', 'Cá suối chiên giòn mắm me', 'Chim câu nướng', 'Heo rừng xào lăn'].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-stone-100 pb-3 border-dotted">
                    <span className="font-medium text-stone-800">{item}</span>
                    <span className="text-stone-400 text-sm italic border-b border-stone-300 border-dashed">Liên hệ</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'starter' && (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {['Khoai lang chiên bơ', 'Ngô chiên', 'Nộm hoa chuối tai heo', 'Nộm sứa', 'Rau dớn xào tỏi', 'Rau rừng luộc chấm kho quẹt', 'Măng chua xào thịt', 'Xôi nếp nương'].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-stone-100 pb-3 border-dotted">
                    <span className="font-medium text-stone-800">{item}</span>
                    <span className="text-stone-400 text-sm italic">Theo mùa</span>
                  </div>
                ))}
              </div>
            )}
             {activeTab === 'hotpot' && (
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {['Lẩu gà lá giang', 'Lẩu gà nấm mọc', 'Lẩu cá tầm', 'Lẩu diêu cua bắp bò', 'Lẩu ếch măng cay', 'Cháo gà đậu xanh', 'Miến gà nấu măng'].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-stone-100 pb-3 border-dotted">
                    <span className="font-medium text-stone-800">{item}</span>
                    <span className="text-stone-400 text-sm italic">Từ 350k</span>
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-10 text-center">
              <button onClick={() => scrollToSection('booking')} className="text-emerald-600 font-semibold hover:text-emerald-800 underline decoration-2 underline-offset-4">
                Gọi ngay để nhận menu đầy đủ và báo giá
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 bg-amber-50 relative overflow-hidden">
        <div className="absolute -left-20 top-20 text-amber-900/5 rotate-[-20deg]">
           <Leaf className="w-64 h-64" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 tracking-tight">Khách Hàng Nói Gì?</h2>
            <p className="text-stone-500">Hơn +500 đánh giá tích cực là minh chứng cho chất lượng tại Khe Giao.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Anh Tuấn Anh", type: "Khách Gia Đình", quote: "Cuối tuần vừa rồi cả nhà dịp ghé Khe Giao. Không gian sân vườn rất mát, trẻ con có chỗ chơi. Gà đồi nướng than hoa rất ngon, thịt dai ngọt chuẩn gà chạy bộ." },
              { name: "Chị Minh Thư", type: "Khách Đi Ngang", quote: "Đi ngang Hà Tĩnh ghé ăn trưa thử. Thật sự bất ngờ vì đồ ăn ngon, nhân viên phục vụ cực kỳ nhiệt tình, giá cả lại rất phải chăng. Chắc chắn sẽ quay lại." },
              { name: "Đại diện Công ty ABC", type: "Khách Đoàn", quote: "Đặt tiệc cho công ty 30 người. Nhà hàng chuẩn bị chu đáo, lên món đều không phải đợi lâu. Các sếp rất ưng ý mẹt gà và lẩu. Cảm ơn nhà hàng." },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative mt-6">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-serif text-3xl italic shadow-md">"</div>
                <div className="flex text-amber-400 mb-4 pt-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-600 mb-6 italic leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold uppercase">
                    {review.name.charAt(4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm">{review.name}</h4>
                    <span className="text-xs text-stone-500 uppercase tracking-wider">{review.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Contact */}
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-stone-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-stone-100">
            {/* Contact Info Side */}
            <div className="bg-emerald-900 text-white p-10 md:p-16 lg:w-5/12 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                 <Utensils className="w-64 h-64" />
               </div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-2">Liên Hệ Đặt Bàn</h2>
                 <p className="text-emerald-200 mb-10">Vui lòng gọi điện hoặc để lại thông tin để chúng tôi phục vụ bạn tốt nhất.</p>
                 
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                       <MapPin className="text-emerald-300" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-lg mb-1">Địa chỉ</h4>
                       <p className="text-emerald-100/80 leading-relaxed">Ngã Ba Khe Giao,<br/> Toàn Lưu, Thạch Hà, Hà Tĩnh</p>
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                       <Phone className="text-emerald-300" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-lg mb-1">Hotline</h4>
                       <a href="tel:0384311368" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">0384 311 368</a>
                     </div>
                   </div>

                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center shrink-0">
                       <Clock className="text-emerald-300" />
                     </div>
                     <div>
                       <h4 className="font-semibold text-lg mb-1">Giờ phục vụ</h4>
                       <p className="text-emerald-100/80">8:00 AM – 11:00 PM<br/>Tất cả các ngày trong tuần</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="mt-12 flex gap-4 relative z-10">
                 <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-colors">
                   <Facebook className="w-5 h-5"/> Nhắn Facebook
                 </a>
                 <a href="tel:0384311368" className="flex-1 bg-amber-500 hover:bg-amber-400 text-stone-900 py-3 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors">
                   <Phone className="w-5 h-5"/> Gọi Ngay
                 </a>
               </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:p-16 lg:w-7/12 bg-white">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Thông Tin Đặt Bàn</h3>
              
              {isBookingSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl flex flex-col items-center text-center h-full justify-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-800 mb-2">Đặt bàn thành công!</h4>
                  <p className="text-emerald-700">Cảm ơn quý khách. Nhà hàng Khe Giao sẽ liên hệ số điện thoại của bạn để xác nhận trong thời gian sớm nhất.</p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Họ và tên *</label>
                      <input required type="text" value={bookingFormData.name} onChange={e => setBookingFormData({...bookingFormData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50" placeholder="Nguyễn Văn A" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Số điện thoại *</label>
                      <input required type="tel" value={bookingFormData.phone} onChange={e => setBookingFormData({...bookingFormData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50" placeholder="0912 345 678" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Ngày giờ đến *</label>
                      <input required type="datetime-local" value={bookingFormData.date} onChange={e => setBookingFormData({...bookingFormData, date: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Số lượng khách *</label>
                      <input required type="number" min="1" value={bookingFormData.guests} onChange={e => setBookingFormData({...bookingFormData, guests: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50" placeholder="Ví dụ: 4" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Dịp dùng bữa</label>
                    <select value={bookingFormData.occasion} onChange={e => setBookingFormData({...bookingFormData, occasion: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50">
                      <option>Bữa ăn Gia đình</option>
                      <option>Tụ tập Bạn bè</option>
                      <option>Liên hoan Công ty / Đoàn</option>
                      <option>Tổ chức Sinh nhật</option>
                      <option>Đặt Tiệc Cưới</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Ghi chú (Yêu cầu riêng, món đặt trước...)</label>
                    <textarea rows={3} value={bookingFormData.notes} onChange={e => setBookingFormData({...bookingFormData, notes: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors bg-stone-50 resize-none" placeholder="Ví dụ: Tôi muốn đặt trước 1 mẹt gà..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-md mt-2">
                    Gửi thông tin đặt bàn
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <div className="h-64 bg-stone-200 w-full relative flex items-center justify-center">
         <div className="text-center text-stone-500">
            <MapPin className="w-8 h-8 mx-auto xl:w-10 xl:h-10 mb-2 opacity-50" />
            <p className="font-medium">Bản đồ Google Maps (Placeholder)</p>
            <p className="text-sm">Ngã Ba Khe Giao, Toàn Lưu, Hà Tĩnh</p>
         </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center border-b border-stone-800 pb-8 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Khe Giao</h2>
              <p className="italic text-sm">"Nơi hương vị quê nhà được giữ trọn trong từng món ăn."</p>
            </div>
            <div className="flex justify-center gap-6">
              {['Trang chủ', 'Thực đơn', 'Đặt bàn', 'Liên hệ'].map((item, idx) => (
                <button key={idx} onClick={() => scrollToSection(item.toLowerCase() === 'trang chủ' ? 'home' : item.toLowerCase() === 'thực đơn' ? 'menu' : item.toLowerCase() === 'đặt bàn' ? 'booking' : 'booking')} className="hover:text-white transition-colors text-sm font-medium">
                  {item}
                </button>
              ))}
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5"/>
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Nhà hàng Khe Giao. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 z-50 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="tel:0384311368" className="flex-1 bg-amber-500 text-stone-900 py-3 rounded-xl flex justify-center items-center gap-2 font-bold shadow-sm">
          <Phone className="w-5 h-5" /> Gọi điện
        </a>
        <button onClick={() => scrollToSection('booking')} className="flex-1 bg-emerald-600 text-white py-3 rounded-xl flex justify-center items-center font-bold shadow-sm">
          Đặt bàn ngay
        </button>
      </div>
    </div>
  );
}

