import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, CheckCircle2, Facebook, MapPin, MessageSquare, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body">
      <header className="relative h-screen md:h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background2.png"
            alt="Taxi Tam Kỳ"
            data-ai-hint="taxi car sunset"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[1]"
            priority
          />
          {/* Gradient overlay để tạo hiệu ứng fade chỉ ở phần dưới */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f7f7] to-transparent"></div>
        </div>
        <div className="z-20 p-4 max-w-4xl relative flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tight drop-shadow-lg">
            GỌI TAXI TAM KỲ? CÓ NGAY SAU 5 PHÚT!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md mb-8">
            Dịch vụ taxi <strong>Nguyễn Văn Giáp</strong> tại Tam Kỳ, Quảng Nam - An toàn, tin cậy, giá cả phải chăng.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
             <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-bold text-2xl sm:text-3xl md:text-2xl px-8 sm:px-12 md:px-8 py-4 sm:py-6 md:py-4 shadow-2xl animate-pulse transform scale-105 sm:scale-110 md:scale-100">
                <a href="tel:0379315159">
                  <Phone className="mr-3 sm:mr-4 md:mr-3 h-8 w-8 sm:h-12 w-12 md:h-8 w-8" /> Gọi Taxi: 0379315159
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/95 text-primary hover:bg-white font-bold text-2xl sm:text-3xl md:text-2xl px-8 sm:px-12 md:px-8 py-4 sm:py-6 md:py-4 shadow-2xl border-2 sm:border-4 md:border-2 transform scale-105 sm:scale-110 md:scale-100">
                <a href="https://zalo.me/0379315159" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-3 sm:mr-4 md:mr-3 h-8 w-8 sm:h-12 w-12 md:h-8 w-8" /> Nhắn Zalo
                </a>
              </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="bg-card p-4 sm:p-6 rounded-xl shadow-lg mt-8 mb-12">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                    <h3 className="text-xl font-bold text-primary">Gọi là có</h3>
                    <p className="text-muted-foreground">Phục vụ 24/7, có mặt sau 5-10 phút.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold text-primary">Giá cả hợp lý</h3>
                    <p className="text-muted-foreground">Cam kết giá cước rẻ, không phát sinh chi phí.</p>
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold text-primary">Tài xế tin cậy</h3>
                    <p className="text-muted-foreground">Lái xe an toàn, thông thạo đường xá.</p>
                </div>
            </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <Star className="mr-3 h-7 w-7" /> Dịch vụ chuyên nghiệp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-base">
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Phục vụ 24/7</strong> – có mặt chỉ sau vài phút</span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Tài xế <strong>thân thiện, chuyên nghiệp</strong>, thông thạo đường xá</span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Đặt xe cực dễ – chỉ cần <strong>GỌI ĐIỆN</strong> hoặc <strong>NHẮN ZALO</strong></span></li>
                <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Nhận đưa đón sân bay, bệnh viện, đi chợ, đưa học sinh, du lịch, công tác...</span></li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <MapPin className="mr-3 h-7 w-7" /> Khu vực phục vụ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-base">
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Nội thành Tam Kỳ</strong> và các xã lân cận: Trường Xuân, Tam Thanh, Tam Phú, Tam Thăng...</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Các huyện quanh Tam Kỳ:</strong> Núi Thành, Thăng Bình, Phú Ninh, Tiên Phước, Hiệp Đức...</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Tuyến đường dài:</strong> đi Hội An, Chu Lai, Tam Kỳ – Đà Nẵng, Tam Kỳ – Huế</span></li>
                <li className="flex items-start"><Car className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" /><span><strong>Đưa đón sân bay</strong> Chu Lai, sân bay Đà Nẵng, bến xe, ga tàu</span></li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="text-center bg-primary/10 p-8 rounded-xl my-16">
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            👉 Cam kết không hét giá – không đi vòng – không phiền hà
          </h2>
          <p className="text-2xl font-semibold text-foreground/80 mb-6">
            Taxi Tam Kỳ – bạn cần là có, bạn gọi là tới!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-accent text-primary-foreground font-bold text-xl animate-pulse shadow-lg">
            <a href="tel:0379315159">
              <Phone className="mr-2 h-6 w-6" /> Gọi ngay: 0379315159
            </a>
          </Button>
        </section>
      </main>

      <footer className="text-center py-8 bg-card border-t">
        <p className="text-xl font-medium">
          🌟 Hân hạnh phục vụ quý khách tại mọi nẻo đường Quảng Nam – Đà Nẵng 🌟
        </p>
         <p className="text-sm text-muted-foreground mt-2">© 2024 Taxi Tam Kỳ - Nguyễn Văn Giáp. All rights reserved.</p>
      </footer>
    </div>
  );
}
