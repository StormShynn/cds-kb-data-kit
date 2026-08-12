---
name: I_CH_QUICKRESPONSEIBANCTRLDATA
description: "This CDS view provides customers with access to the Define Control Data for QR-Bill (ID: 103321) configuration activity as part of the available BADI_QRBILL_CH_PRINT. This CDS view provides the data to answer the following business questions: How can I access or retrieve the maintained QR-Bill control data configurations from the view V_CH_QR_T049Q? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-CSC-CH
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value
semantic_en: "This CDS view provides customers with access to the Define Control Data for QR-Bill (ID: 103321) configuration activity as part of the available BADI_QRBILL_CH_PRINT. This CDS view provides the data to answer the following business questions: How can I access or retrieve the maintained QR-Bill control data configurations from the view V_CH_QR_T049Q? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "QRBILL Ctrl Data Config for Switzerland — CDS view giao diện dựa trên t049q."
keywords:
  - "qrbill"
  - "ctrl"
  - "data"
  - "config"
  - "for"
  - "switzerland"
  - "quick"
  - "response"
  - "customer"
  - "identifier"
  - "company"
  - "code"
  - "leading"
  - "accounting"
  - "document"
tags:
  - CA
  - bo:businesspartner
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-CH
  - component:CA-GTF-CSC-CH
  - customer
  - interface-view
  - lob:cross_application components
  - bo:companycode
---
# I_CH_QUICKRESPONSEIBANCTRLDATA

**This CDS view provides customers with access to the Define Control Data for QR-Bill (ID: 103321) configuration activity as part of the available BADI_QRBILL_CH_PRINT. This CDS view provides the data to answer the following business questions: How can I access or retrieve the maintained QR-Bill control data configurations from the view V_CH_QR_T049Q? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QuickResponseIBAN` | ✓ | |  | `qriban` | `CHAR(34)` | QR-IBAN International Bank Account Number |
| `CH_CustomerIdentifier` | ✓ | |  | `kunid` | `CHAR(6)` | Customer ID Number |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `IsLeadingCompanyCode` |  | |  | `buflg` | `CHAR(1)` | Leading Company Code |
| `AccountingDocumentNumberOffset` |  | |  | `ofset` | `NUMC(2)` | Offset of Document Number in the QR-Bill Reference Number |
| `AccountingDocumentNumberLength` |  | |  | `lblnr` | `NUMC(2)` | Length of Document Number |
| `CustomerNumberOffset` |  | |  | `ofknd` | `NUMC(2)` | Offset of Customer Number in the QR Reference Number |
| `CustomerNumberLength` |  | |  | `lkdnr` | `NUMC(2)` | Length of Customer Number |
| `CH_AmountIsNotRequired` |  | |  | `notamt` | `CHAR(1)` | Do Not Print Amount |
| `CH_BillInfoIsNotRequired` |  | |  | `nostrdbxginf` | `CHAR(1)` | Do Not Print Billing Information |
| `CH_QckRspBillIsNotRequired` |  | |  | `notakt` | `CHAR(1)` | Do Not Print QR-Bill |
| `CH_QuickResponseBillOutputFrmt` |  | |  | `form_param` | `CHAR(2)` | Format Parameter for QR-Bill |
| `CH_QuickResponseProvider` |  | |  | `qrprovider` | `CHAR(2)` | QR Provider |
| `CH_QuickResponseReference` |  | |  | `reftype` | `CHAR(4)` | Reference Type of QR-Bill |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `SalesDocumentCurrency` |  | |  | `waerk` | `CUKY(5)` | SD Document Currency |
| `CH_AccountModification` |  | |  | `sakoz` | `CHAR(10)` | Bank Statement: Account Modification |
| `CH_AppIndicatorIdentifier` |  | |  | `applk` | `CHAR(6)` | Application Indicator |
| `DunningNoticeIsPrinted` |  | |  | `xmqr` | `CHAR(1)` | Print Dunning Notices |
| `_CompanyCode` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'QRBILL Ctrl Data Config for Switzerland'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]
                                      
define view entity I_CH_QuickResponseIBANCtrlData
  as select from    t049q        as Controller
    left outer one to exact one join glo_qr_sales as Sales         on  Sales.bukrs  = Controller.bukrs
                                                                   and Sales.qriban = Controller.qriban
                                                                   and Sales.kunid  = Controller.kunid
    left outer one to exact one join idfi_qr_fi   as FinController on  FinController.bukrs  = Controller.bukrs
                                                                   and FinController.qriban = Controller.qriban
                                                                   and FinController.kunid  = Controller.kunid
 
  association [0..1] to I_CompanyCode       as _CompanyCode       on $projection.CompanyCode = _CompanyCode.CompanyCode
 
  association [0..1] to I_SalesOrganization as _SalesOrganization on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
{
  key Controller.qriban       as QuickResponseIBAN,
  key Controller.kunid        as CH_CustomerIdentifier,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Controller.bukrs        as CompanyCode,
      @Semantics.booleanIndicator:true
      Controller.buflg        as IsLeadingCompanyCode,
      Controller.ofset        as AccountingDocumentNumberOffset,
      Controller.lblnr        as AccountingDocumentNumberLength,
      Controller.ofknd        as CustomerNumberOffset,
      Controller.lkdnr        as CustomerNumberLength,
      Controller.notamt       as CH_AmountIsNotRequired,
      Controller.nostrdbxginf as CH_BillInfoIsNotRequired,
      Controller.notakt       as CH_QckRspBillIsNotRequired,
      Controller.form_param   as CH_QuickResponseBillOutputFrmt,
      Controller.qrprovider   as CH_QuickResponseProvider,
      Controller.reftype      as CH_QuickResponseReference,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      Sales.vkorg             as SalesOrganization,
      Sales.waerk             as SalesDocumentCurrency,
      FinController.sakoz     as CH_AccountModification,
      FinController.applk     as CH_AppIndicatorIdentifier,
      FinController.xmqr      as DunningNoticeIsPrinted,
      
      // ... more fields ...
  _CompanyCode,        // <-- exposes the _CompanyCode association (optional)
  _SalesOrganization   // <-- exposes the _SalesOrganization association (optional)
      
}
```
