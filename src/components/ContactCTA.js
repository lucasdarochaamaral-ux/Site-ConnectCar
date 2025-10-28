"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var browser_1 = require("@emailjs/browser");
var app_dashboard_png_1 = require("../assets/images/app-dashboard.png");
var ContactCTA = function () {
    var _a = (0, react_1.useState)({
        name: '',
        email: '',
        phone: '',
        message: ''
    }), formData = _a[0], setFormData = _a[1];
    var _b = (0, react_1.useState)({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    }), status = _b[0], setStatus = _b[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var serviceID, templateID, publicKey, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setStatus(function (prevStatus) { return (__assign(__assign({}, prevStatus), { submitting: true, info: { error: false, msg: null } })); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    serviceID = 'service_g3qcijm';
                    templateID = 'template_5l5zjfl';
                    publicKey = 'lWr4FDwEmFJBRrC5Q';
                    return [4 /*yield*/, browser_1.default.sendForm(serviceID, templateID, e.currentTarget, publicKey)];
                case 2:
                    result = _a.sent();
                    console.log('E-mail enviado com sucesso:', result.text);
                    setStatus({
                        submitted: true,
                        submitting: false,
                        info: {
                            error: false,
                            msg: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
                        }
                    });
                    // Limpar formulário após envio bem-sucedido
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Erro ao enviar e-mail:', error_1);
                    setStatus({
                        submitted: false,
                        submitting: false,
                        info: {
                            error: true,
                            msg: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.'
                        }
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (<section id="contato" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer a melhor solução para o rastreamento do seu veículo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              
              {status.info.msg && (<div className={"mb-4 p-4 rounded ".concat(status.info.error ? 'bg-red-500/20 text-red-200' : 'bg-orange-500/20 text-orange-200')}>
                  {status.info.msg}
                </div>)}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500" required disabled={status.submitting}/>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500" required disabled={status.submitting}/>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500" required disabled={status.submitting}/>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500" required disabled={status.submitting}></textarea>
                </div>
                
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={status.submitting}>
                  {status.submitting ? (<>
                      <span className="animate-spin mr-2">⟳</span>
                      Enviando...
                    </>) : (<>
                      <lucide_react_1.Send size={18} className="mr-2"/>
                      Enviar Mensagem
                    </>)}
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <img src={app_dashboard_png_1.default} alt="ConnectCar Dashboard" className="rounded-lg shadow-lg max-w-full mx-auto" style={{ maxHeight: '300px' }}/>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <lucide_react_1.Phone size={24}/>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">WhatsApp</h4>
                  <a href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                    Clique para conversar
                  </a>
                </div>
              </div>
              
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <lucide_react_1.Mail size={24}/>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">E-mail</h4>
                  <a href="mailto:contato@connectcar123.com.br" className="text-orange-400 hover:text-orange-300 transition-colors">
                    contato@connectcar123.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = ContactCTA;
