import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface DemoLoginProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export function DemoLogin({ open, onOpenChange, productName = "" }: DemoLoginProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 실제 환경에서는 여기서 정보를 저장하고 데모 페이지로 이동
    console.log("Demo access request:", { ...formData, product: productName });
    
    // 데모 페이지로 이동 (실제 URL로 교체 필요)
    window.open('/demo', '_blank');
    
    // 폼 초기화 및 다이얼로그 닫기
    setFormData({ name: "", email: "", company: "", phone: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>데모 페이지 접속</DialogTitle>
          <DialogDescription>
            {productName && <span className="block mb-2">제품: <strong>{productName}</strong></span>}
            데모를 체험하시려면 아래 정보를 입력해주세요.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="홍길동"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@company.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">회사명</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="회사명"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">연락처</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="010-0000-0000"
            />
          </div>
          <Button type="submit" className="w-full">
            데모 시작하기
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}