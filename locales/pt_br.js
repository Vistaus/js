// Set your language/locale codes here.
//
// Locale can be blank, in which case it will be used as the default for the
// language.
//
// if you don't know your language/local codes, fine them here:
//   https://www.science.co.il/language/Locale-codes.php
var language = 'pt';
var locale = 'br';

// Do your translation here!
var translation = {
	"(empty note)": "(nota em branco)",
	"(This process can take a while because we need to re-encrypt your keychain)": "(Esse processo pode demorar um pouco, porque precisaremos re-encriptar sua keychain)",
	", however you have {{length}} changes waiting to be synced that will be lost if you do this": ", porém você tem {{length}} modificações esperando para serem sincronizadas que serão perdidas se você continuar",
	"[Making links](https://turtlapp.com) is easy!": "[Fazer links](https://turtlapp.com) é fácil!",
	"{{email}} has a confirmed account and this invite will be encrypted using their public key.": "{{email}} tem uma conta confirmada e este convite será encriptado usando a chave pública dela.",
	"{{email}} has a Turtl account, but it is not confirmed. You may want protect the invite with a passphrase to keep it private.": "{{email}} tem uma conta Turtl, mas ela não foi confirmada. É possível proteger o convite com uma senha para mantê-lo privado.",
	"{{email}} isn't registered with Turtl. It's recommended to protect the invite with a passphrase to keep it private.": "{{email}} não tem uma conta Turtl. É recomendado proteger o convite com uma senha para mantê-lo privado.",
	"{{n}} days ago": "{{n}} dias atrás",
	"{{n}} hours ago": "{{n}} horas atrás",
	"{{n}} minutes ago": "{{n}} minutos atrás",
	"{{n}} seconds ago": "{{n}} segundos atrás",
	"<strong>Error:</strong> {{errmsg}} ({{errcode}})": "<strong>Erro:</strong> {{errmsg}} ({{errcode}})",
	"A note on how Turtl works": "Uma observação sobre como Turtl funciona",
	"Accept": "Aceitar",
	"Add a new bookmark": "Adicionar um novo URL favorito",
	"Add a new file": "Adicionar um novo arquivo",
	"Add a new image": "Adicionar uma nova imagem",
	"Add a new note": "Adicionar uma nova nota",
	"Add a new password": "Adicionar uma nova senha",
	"Add a new text note": "Adicionar uma nova nota de texto",
	"Add": "Adicionar",
	"Advanced settings": "Configurações avançadas",
	"All notes": "Todas as notas",
	"Are you sure you want to delete your account and all your data <em>forever</em>?": "Você tem certeza que quer deletar sua conta e todos os seus dados <em>para sempre</em>?",
	"Attach a file": "Anexar um arquivo",
	"Back to my notes": "Voltar às minhas notas",
	"Blocked by frozen syncs.": "Bloqueado por sincronizações congeladas.",
	"Board title": "Título do quadro",
	"Boards": "Quadros",
	"bookmark": "URL favorito",
	"Bookmark": "URL favorito",
	"Cancel": "Cancelar",
	"Change login": "Mudar login",
	"Change password": "Mudar senha",
	"Changing your password requires being connected.": "Mudar sua senha requere que esteja conectado.",
	"Clear all current filters (show all notes in the board)": "Remover todos os filtros atuais (mostrar todas as notas no quadro)",
	"Clear local data and log out": "Apagar dados locais e deslogar",
	"Clear local data": "Apagar dados locais",
	"Client version: <em>{{version}}</em>": "Versão do cliente: <em>{{version}}</em>",
	"comma, separate, tags": "vírgulas, separam, etiquetas",
	"Completely wipe current profile before importing": "Apagar completamente perfil atual antes de importar",
	"Confirm passphrase": "Confirmar senha",
	"Confirm your current login": "Confirmar login atual",
	"Confirmation email resent": "Confirmação de email reenviada",
	"Connected to the Turtl service! Disengaging offline mode. Syncing your profile.": "Conectado ao serviço Turtl! Desativando modo offline. Sincronizando seu perfil.",
	"Connected": "Conectado",
	"Copied!": "",
	"Copy link to note": "",
	"Couldn't connect to the server": "Não foi possível se conectar ao servidor",
	"Create a new account to migrate your data into.": "Criar uma nova conta para onde seus dados serão migrados",
	"Create a space": "Criar novo espaço",
	"Create an account": "Criar uma conta",
	"Create board in {{space}}": "Criar um quadro em {{space}}",
	"Create date": "Data de criação",
	"Create": "Criar",
	"Current email": "Email atual",
	"Current passphrase": "Senha atual",
	"dashes</li><li>make</li><li>bullets": "traços</li><li>criam</li><li>listas",
	"dashes<br>- make<br>- bullets": "traços<br>- criam<br>- listas",
	"Debug log": "Registro de depuração",
	"Decrypted {{percent}} of items": "{{percent}} dos itens foram desencriptados",
	"Delete account": "Deletar conta",
	"Delete current note": "Deletar nota atual",
	"Delete my account": "Deletar minha conta",
	"Delete sync item": "Deletar item sincronizando",
	"Delete this board": "Deletar esse quadro",
	"Delete this space &raquo;": "Deletar esse espaço &raquo;",
	"Delete": "Deletar",
	"Disconnected from the Turtl service. Engaging offline mode. Your changes will be saved and synced once back online!": "Desconectado do serviço Turtl. Ativando modo offline. Suas modificações serão salvas e sincronizadas quando você ficar online novamente!",
	"Downloading files...": "Baixando arquivos...",
	"Edit board": "Editar quadro",
	"Edit current note": "Editar nota atual",
	"Edit note": "Editar nota",
	"Edit": "Editar",
	"Editing {{title}}": "Editando {{title}}",
	"Editing in markdown": "Editando com Markdown",
	"Email address": "Endereço de email",
	"Email": "Email",
	"Enter a new email/password": "Digite um novo email/senha",
	"Error loading profile": "Erro carregando o perfil",
	"Error": "Erro",
	"excellent": "excelente",
	"Export": "Exportar",
	"Feedback": "Feedback",
	"File saved to Download/{{filename}}": "Arquivo salvo em Download/{{filename}}",
	"file": "arquivo",
	"File": "Arquivo",
	"Files downloaded, decrypting profile...": "Arquivos baixados, desencriptando perfil...",
	"Find a note by hitting <kbd>/</kbd> and typing your search followed by <kbd>Enter</kbd>. The note search box supports <a href=\"https://sqlite.org/fts3.html#full_text_index_queries\" target=\"_blank\">Sqlite's FTS3 syntax</a>.": "Busque por uma nota apertando <kbd>/</kbd> e digitando os termos de pesquisa seguidos de <kbd>Enter</kbd>. A caixa de pesquisa de notas suporta a <a href=\"https://sqlite.org/fts3.html#full_text_index_queries\" target=\"_blank\">sintaxe FTS3 do Sqlite</a>.",
	"Formatting help": "Ajuda de formatação",
	"From {{user}}": "De {{user}}",
	"Frozen - This item is blocking syncing. Fix by unfreezing or deleting.": "Congelado - Este item está bloqueando a sincronização. Conserte o problema descongelando ou deletando o item.",
	"Give us feedback": "Dar seu feedback",
	"Give your feedback": "Dê seu feedback",
	"good": "bom",
	"Grabbed {{num_keychain}} keychain entries, {{num_boards}} boards, {{num_notes}} notes, {{num_files}} files from old server": "Foram resgatados {{num_keychain}} registros da keychain, {{num_boards}} quadros, {{num_notes}} notas, e {{num_files}} arquivos do servidor antigo",
	"great": "ótimo",
	"Have an idea? A problem?": "Tem alguma ideia? Algum problema?",
	"Here's an image: ": "Aqui está uma imagem: ",
	"Here's an image:<br>![](https://turtlapp.com/images<space> </space>/favicon.png)": "Aqui está uma imagem:<br>![](https://turtlapp.com/images<space> </space>/favicon.png)",
	"I will remember my login!": "Eu vou me lembrar do meu login!",
	"Image URL": "URL da imagem",
	"image": "imagem",
	"Image": "Imagem",
	"Import &amp; export": "Importar &amp; exportar",
	"Import everything, overwriting current items": "Importar tudo e sobrescrever itens existentes",
	"Imported {{count}} items": "{{count}} itens importados",
	"Indexing notes": "Indexando notas",
	"Initializing Turtl": "Inicializando Turtl",
	"Invite passphrase": "Senha do convite",
	"Invite title (shared with invitee)": "Título do convite (compartilhado com o convidado)",
	"Invite to &quot;{{board_title}}&quot;": "Convite para &quot;{{board_title}}&quot;",
	"Invite": "Convidar",
	"Invitee's email address": "Endereço de email do convidado",
	"It looks like you had some problems during migration. Don't worry, your data is still safe on the old Turtl server and you can try again at any time. Please send this log to the turtl team at {{email}}": "Parece que você teve alguns problemas durante a migração. Não se preocupe, seus dados ainda estão seguros no antigo servidor Turtl e você pode tentar novamente a qualquer hora. Por favor, envie esse registro para o time turtl no email {{email}}",
	"Join": "Juntar-se",
	"Just making sure...do you really want to delete your account?": "Só pra ter certeza... você quer mesmo deletar sua conta?",
	"Keyboard shortcuts": "Atalhos de teclado",
	"Last edited": "Data da última edição",
	"Leave this space &raquo;": "Deixar este espaço &raquo;",
	"Leave this space": "Deixar este espaço",
	"Leaving a space requires a connection to the Turtl server": "Deixar um espaço requere conexão ao servidor Turtl",
	"Load everything (may be slow)": "Carregar tudo (pode ser demorado)",
	"Load last {{lines}} lines": "Carregar as últimas {{lines}} linhas",
	"Loading notes...": "Carregando notas...",
	"Loading profile": "Carregando perfil",
	"Log out": "Deslogar",
	"Logged in as <em>{{username}}</em> <small>(on {{server}})</small>": "Logado como <em>{{username}}</em> <small>(em {{server}})</small>",
	"Login failed": "Login falhou",
	"Login to an existing account": "Login com uma conta existente",
	"Login": "Login",
	"Logout": "Deslogar",
	"Making links</a> is easy!": "Fazer links</a> é fácil!",
	"Malformed note": "Nota mal formada",
	"Members": "Membros",
	"Migrate your account": "Migrar sua conta",
	"Migrate": "Migrar",
	"Migration error...": "Erro de migração...",
	"Migration report": "Relatório de migração",
	"Migration started. This can take a few minutes! Please be patient.": "Migração iniciada. Isto pode levar alguns minutos! Por favor, seja paciente.",
	"Move board to another space": "Mover quadro para outro espaço",
	"Move note to another space": "Mover nota para outro espaço",
	"Move space": "Mover espaço",
	"Move": "Mover",
	"New bookmark": "Novo URL favorito",
	"New email address": "Novo endereço de email",
	"New email": "Novo email",
	"New invite": "Novo convite",
	"New passphrase": "Nova senha",
	"Next": "Próximo",
	"No board selected": "Nenhum quadro selecionado",
	"No notes found.": "Nenhuma nota encontrada.",
	"No notes here!": "Sem notas por aqui!",
	"None": "Nenhum",
	"Note moved successfully.": "Nota movida com sucesso.",
	"Note preview": "Previsão da nota",
	"Note text": "Texto da nota",
	"Note that when you move a board to another space, all of its notes will be moved with it.": "Lembre-se que quando você move um quadro para outro espaço, suas notas são movidas com ele.",
	"Offline mode": "Modo offline",
	"ok": "ok",
	"Old profile loaded, converting to new format...": "Perfil antigo carregado, convertendo para novo formato...",
	"Old Turtl server": "Servidor Turtl antigo",
	"One hash makes a large title": "Uma cerquilha gera um título grande",
	"Only import items missing from current profile": "Importar somente itens que estão faltando no perfil atual",
	"Open a space easily by hitting <kbd>s</kbd>, typing the name of the space you want, and hitting <kbd>Enter</kbd>. You will then be taken to the board selector. Hit <kbd>Enter</kbd> again for \"All notes\" or type the name of the board you want to open and hit <kbd>Enter</kbd> to open it.": "Abra um espaço facilmente apertando <kbd>s</kbd>, digitando o nome do espaço que você quer, e apertando <kbd>Enter</kbd>. Daí você será levado ao seletor de quadros. Aperte <kbd>Enter</kbd> novamente para acessar \"Todas as notas\" ou digite o nome do quadro que você quer abrir e aperte <kbd>Enter</kbd> para abri-lo.",
	"Open boards menu": "Abrir menu de quadros",
	"Open current note": "Abrir nota atual",
	"Open spaces menu": "Abrir menu de espaços",
	"Open the board selector by hitting <kbd>b</kbd>. You can hit <kbd>Enter</kbd> with the search box blank to open \"All notes\" or you can type the name of the board you want and hit <kbd>Enter</kbd> to open it.": "Abra o seletor de quadros apertando <kbd>b</kbd>. Você pode apertar <kbd>Enter</kbd> com a caixa de pesquisa vazia para acessar \"Todas as notas\" ou você pode digitar o nome do quadro que você quer e apertar <kbd>Enter</kbd> para abri-lo.",
	"OR": "OU",
	"Passphrase (optional)": "Senha (opcional)",
	"Passphrase (optional, but recommended)": "Senha (opcional, mas recomendado)",
	"Passphrase strength: ": "Força da senha",
	"Passphrase": "Senha",
	"password": "senha",
	"Password": "Senha",
	"Pending invites": "Convites pendentes",
	"Please enter some feedback": "Por favor, digite algum feedback",
	"Please give your invite a title.": "Por favor, dê um título ao seu convite.",
	"Please select a role for this user.": "Por favor, selecione uma função para este usuário.",
	"Prev": "Anterior",
	"Proxy server": "",
	"Quote text with a caret": "Cite texto com o sinal de maior",
	"Read more &raquo;": "Leia mais &raquo;",
	"Read more about <a href=\"https://guides.github.com/features/mastering-markdown/\" target=\"_blank\">markdown</a>.": "Leia mais sobre <a href=\"https://guides.github.com/features/mastering-markdown/\" target=\"_blank\">markdown</a>.",
	"Ready to sync": "Pronto para sincronizar",
	"Really delete this board and all of its notes?": "Realmente deletar este quadro e todas suas notas?",
	"Really delete this invite?": "Realmente deletar este convite?",
	"Really delete this note?": "Realmente deletar esta nota?",
	"Really delete this space and all of its data (boards and notes)?": "Realmente deletar este espaço e todos seus dados (quadros e notas)?",
	"Really delete this sync item? Doing this will undo a change you've made locally (try unfreezing first).": "Realmente deletar este item que está sincronizando? Fazer isso irá desfazer modificações que você fez localmente (tente descongelá-lo primeiro).",
	"Really delete this user from this space?": "Realmente deletar este usuário deste espaço?",
	"Really hand ownership of this space to another member? (You will be demoted to admin)": "Realmente entregar a posse deste espaço para outro membro? (Você será despromovido a admin)",
	"Really leave this space?": "Realmente deixar este espaço?",
	"Remove attachment": "Remover anexo",
	"Resend confirmation": "Reenviar confirmação",
	"Reset search": "Resetar busca",
	"Retry": "Tentar novamente",
	"Save": "Salvar",
	"Search for boards": "Buscar por quadros",
	"Search for spaces": "Buscar por espaços",
	"Search notes ({{num}})": "Buscar notas ({{num}})",
	"Search notes": "Buscar notas",
	"Select a board": "Selecione um quadro",
	"Select the color for this space": "Selecione a cor desse espaço",
	"Select the space to move to:": "Selecionar o espaço para mudar",
	"Send": "Enviar",
	"Sending an invite requires a connection to the Turtl server.": "Enviar um convite requer uma conexão ao servidor Turtl.",
	"Sending feedback requires a connection to the Turtl server.": "Enviar feedback requere uma conexão ao servidor Turtl.",
	"Set as owner": "Marcar como dono",
	"Set this as your default space": "Marcar como seu espaço padrão",
	"Settings": "Configurações",
	"Share this space &raquo;": "Compartilhar esse espaço &raquo;",
	"Share this space": "Compartilhar este espaço",
	"Sharing": "Compartilhando",
	"Show all tags": "Mostrar todas as etiquetas",
	"Show this help": "Mostrar esta ajuda",
	"Skip SSL verification": "",
	"Space title": "Título do espaço",
	"Stay logged in": "Permanecer logado",
	"Staying logged in may compromise the security of your account.": "Permanecer logado pode comprometer a segurança da sua conta.",
	"Successfully imported {{count}} items!": "{{count}} itens importados com sucesso!",
	"Sync info": "Informações de sincronização",
	"Tag note": "Etiquetar nota",
	"Tap <em>+</em> to start": "Toque em <em>+</em> para começar",
	"text note": "nota de texto",
	"Text note": "Nota de texto",
	"Text search": "Busca de texto",
	"Thanks!": "Obrigado!",
	"That board doesn't seem to exist": "Esse quadro não parece existir",
	"That passphrase is making me cringe.": "Essa senha está me dando vergonha.",
	"The email given is invalid.": "O email fornecido é inválido.",
	"The specified role does not exist.": "A função especificada não existe.",
	"There was a problem accepting the invite. Most likely, the passphrase given was incorrect.": "Ocorreu um problema ao aceitar o convite. A senha provavelmente estava errada.",
	"There was a problem changing your login. We are undoing the changes": "Ocorreu um problema ao trocar seu login. Nós estamos desfazendo as mudanças",
	"There was a problem clearing your profile": "Ocorreu um problema ao remover seu perfil",
	"There was a problem deleting that invite": "Ocorreu um problema ao deletar aquele convite",
	"There was a problem deleting that sync item": "Ocorreu um problema ao deletar aquele item que estava sincronizando",
	"There was a problem deleting the user": "Ocorreu um problema ao deletar o usuário",
	"There was a problem deleting your account. Please try again.": "Ocorreu um problema ao deletar sua conta. Por favor, tente novamente.",
	"There was a problem deleting your board: {{message}}": "Ocorreu um problema ao deletar seu quadro: {{message}}",
	"There was a problem deleting your note: {{err}}": "Ocorreu um problema ao deletar sua nota: {{err}}",
	"There was a problem deleting your space: {{message}}": "Ocorreu um problema ao deletar seu espaço: {{message}}",
	"There was a problem editing the user": "Ocorreu um problema ao editar seu usuário",
	"There was a problem leaving the space": "Ocorreu um problema ao deixar o espaço",
	"There was a problem loading search tags": "",
	"There was a problem loading the debug log": "Ocorreu um problema ao carregar o registro de depuração",
	"There was a problem loading:": "Ocorreu um problema ao carregar",
	"There was a problem migrating that account": "Ocorreu um problema ao migrar aquela conta",
	"There was a problem moving that board.": "Ocorreu um problema ao mover aquele quadro.",
	"There was a problem moving that note.": "Ocorreu um problema ao mover aquela nota.",
	"There was a problem opening that file": "Ocorreu um problema ao abrir aquele arquivo",
	"There was a problem resending your confirmation email": "Ocorreu um problema ao reenviar sua confirmação de email",
	"There was a problem saving that account": "Ocorreu um problema ao salvar aquela conta",
	"There was a problem saving the file {{filename}}.": "Ocorreu um problema ao salvar o arquivo {{filename}}.",
	"There was a problem searching notes": "",
	"There was a problem sending that feedback": "Ocorreu um problema ao enviar aquele feedback",
	"There was a problem sending that invite": "Ocorreu um problema ao enviar aquele convite",
	"There was a problem setting the API endpoint. Try restarting the app.": "Ocorreu um problema ao configurar o ponto de saída da API. Tente reiniciar o app.",
	"There was a problem setting the new owner": "Ocorreu um problema ao configurar o novo dono",
	"There was a problem unfreezing that sync item": "Ocorreu um problema ao descongelar aquele item que estava sincronizando",
	"There was a problem updating that board": "Ocorreu um problema ao atualizar aquele quadro",
	"There was a problem updating that note": "Ocorreu um problema ao atualizar aquela nota",
	"There was a problem updating that space": "Ocorreu um problema ao atualizar aquele espaço",
	"There was a problem with the initial load of your profile. Please try again.": "Ocorreu um problema com o carregamento inicial do seu perfil. Por favor, tente novamente.",
	"There was an error syncing a local change and syncing is paused. Click to open your sync settings and fix &raquo;": "Ocorreu um problema ao sincronizar uma modificação local, portanto sincronizações estão pausadas. Clique nas suas configurações de sincronização e conserte &raquo;",
	"This invite is passphrase-protected. You must enter the correct passphrase to unlock it.": "Esse convite é protegido por senha. Você deve digitar a senha correta para destravá-lo.",
	"This is your last space, and cannot be deleted.": "Este é o seu último espaço e não pode ser deletado.",
	"This note has unsaved changes. Really leave?": "Esta nota tem modificações não salvas. Realmente sair?",
	"This note was saved incorrectly and cannot be displayed.\n\n```\n{{-note_data}}\n```\n": "Esta nota foi salva incorretamente e não pode ser exibida.\n\n```\n{{-note_data}}\n```\n",
	"This passphrase is used to encrypt the invite. You can communicate it to the invitee via a secure channel (in-person, encrypted email, encrypted chat, etc).": "Essa senha é usada para encriptar o convite. Você pode transmiti-la para o convidado através de um método seguro (em pessoa, email encriptado, chat encriptado, etc).",
	"This process can take a while.": "Esse processo pode demorar um pouco.",
	"This space is shared with you": "Este espaço está compartilhado com você",
	"This URL is already bookmarked in {{ids_length}} notes": "Esse URL já está marcado como favorito em {{ids_length}} notas",
	"This URL is already bookmarked in another note": "Esse URL já está marcado como favorito em outra nota",
	"This will erase all your local data and log you out. Your profile will be downloaded again next time you log in{{msg}}. Continue?": "Isso vai apagar todos os seus dados locais e deslogar. Seu perfil será baixado novamente na próxima vez que você logar{{msg}}. Continuar?",
	"Tips on keyboard navigation": "Dicas para navegação com teclado",
	"Title": "Título",
	"todo lists": "listas de tarefas",
	"too short": "muito curto",
	"Trouble logging in?": "Com problemas para logar?",
	"Turtl has no \"Lost password\" feature. If you lose your password, your profile is gone forever!": "Turtl não tem opção \"Esqueci minha senha\". Se você perder sua senha, seu perfil será perdido para sempre!",
	"Turtl notes use Markdown, a format that's easy to read and write and doesn't require a clunky editor.": "As notas do Turtl usam Markdown, um formato que é fácil de ler e escrever e não precisa de um editor avançado.",
	"Turtl now also supports TeX math. Begin and end your equation(s) with <code>$$</code>:": "Agora o Turtl também suporta equações matemáticas em formato TeX. Inicie e termine sua(s) equação(ões) com <code>$$</code>:",
	"Turtl server": "Servidor Turtl",
	"Two hashes for a smaller header": "Duas cerquilhas geram um cabeçalho menor",
	"Unfreeze sync item": "Descongelar item que está sincronizando",
	"Unlock": "Destravar",
	"Updating your login. Please be patient (and DO NOT close the app)!": "Atualizando seu login. Por favor, seja paciente (e NÃO feche o app)!",
	"URL": "URL",
	"Use backticks for `inline_code()`": "Use acentos graves para `codigo_na_mesma_linha()`",
	"Use backticks for <code>inline_code()</code>": "Use acentos graves para <code>codigo_na_mesma_linha()</code>",
	"Username": "Usuário",
	"We appreciate you taking the time to help make Turtl better.": "Nós agradecemos que você tenha doado tempo para ajudar a fazer o Turtl melhor.",
	"We don't store your password anywhere, so <em class=\"error\">you need to remember your password</em> or keep it in a safe place (like a password manager).": "Nós não armazenamos sua senha em lugar nenhum, então <em class=\"error\">você precisa lembrar da sua senha</em> ou mantê-la num local seguro (como um gerenciador de senhas).",
	"weak": "fraca",
	"Welcome!": "Bem-vindo(a)!",
	"works too": "também funcionam",
	"Yes, delete my account": "Sim, delete minha conta",
	"You are currently in offline mode.": "Você atualmente está no modo offline.",
	"You can also make text __bold__, *italic* or ~~strikethrough~~.": "Você também pode transformar o texto __em negrito__, *itálico* ou ~~riscado~~.",
	"You can also make text <strong>bold</strong>, <em>italic</em> or <strike>strikethrough</strike>.": "Você também pode transformar o texto <strong>em negrito</strong>, <em>itálico</em> ou <strike>riscado</strike>.",
	"you can make</li><li>numbered bullets</li><li>as well": "você pode fazer</li><li>listas numeradas</li><li>também",
	"you can make<br>1. numbered bullets<br>1. as well": "você pode fazer<br>1. listas numeradas<br>1. também",
	"You do not have permissions to move boards/notes to that space.": "Você não tem permissões para mover quadros/notas para aquele espaço.",
	"You do not have permissions to move notes to that space.": "Você não tem permissões para mover notas para aquele espaço.",
	"You do not have the needed permission to do that on this space: {{perm}}": "Você não tem a permissão necessária para fazer isso neste espaço: {{perm}}",
	"You have {{num}} pending sync item(s)": "Você tem {{num}} item(ns) com sincronização pendente",
	"You have no pending invitations": "Você não tem convites pendentes",
	"You have one or more frozen sync items. Syncing will be stuck until you fix them. Try unfreezing first, and if that doesn't work, you can delete the frozen sync item(s).": "Você tem um ou mais itens que estavam sincronizando congelados. A sincronização ficará travada até que você os conserte. Tente descongelá-los primeiro, e se isso não funcionar, você pode deletar os itens congelados.",
	"You must be connected to the Turtl service to accept invites.": "Você precisa estar conectado ao serviço Turtl para aceitar convites.",
	"You must be connected to the Turtl service to delete invites.": "Você precisa estar conectado ao serviço Turtl para deletar convites.",
	"You must be logged in to perform this action.": "Você precisa estar logado para efetuar essa ação.",
	"You must confirm your account before accepting invites. If you no longer have your confirmation email, you can resend it from the Settings menu.": "Você precisa confirmar sua conta antes de aceitar convites. Se você não tem mais acesso ao seu email de confirmação, você pode reenviá-lo do menu de Configurações.",
	"You must confirm your account before accepting invites.": "Você precisa confirmar sua conta antes de aceitar convites.",
	"You must confirm your email to share spaces.": "Você precisa confirmar seu email para compartilhar espaços.",
	"You must log in": "Você precisa logar",
	"You": "Você",
	"Your account has been deleted.": "Sua conta foi deletada.",
	"Your account needs to be upgraded! Please enter your Turtl login info.": "Sua conta precisa ser atualizada! Por favor, entre suas informações de login do Turtl.",
	"Your account password acts as the \"key\" that locks and unlocks your data.": "A senha da sua conta age como a \"chave\" que tranca e destranca seus dados.",
	"Your invites": "Seus convites",
	"Your login was changed successfully! Logging you out...": "Seu login foi trocado com sucesso! Te deslogando...",
	"Your login was changed successfully!": "Seu login foi trocado com sucesso!",
	"Your passphrase does not match the confirmation.": "Sua senha não bate com a confirmação.",
	"Your settings": "Suas configurações",
	"Your spaces": "Seus espaços",
};

