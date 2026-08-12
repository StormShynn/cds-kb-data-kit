---
name: I_PAYTADVICECOMPANYCODEVH
description: "This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-GTF-FXU-FI-AR
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value
semantic_en: "This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Payment Advice Company Code — CDS view giao diện dựa trên Payment Advice Company Code."
keywords:
  - "payment"
  - "advice"
  - "company"
  - "code"
  - "name"
  - "city"
  - "country"
  - "currency"
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-FXU
  - CA-GTF-FXU-FI
  - CA-GTF-FXU-FI-AR
  - component:CA-GTF-FXU-FI-AR
  - interface-view
  - lob:cross_application components
  - lob:finance
  - payment
---
# I_PAYTADVICECOMPANYCODEVH

**This CDS view provides value help for payment advice company code data. This view should be used for value help purposes only. If you intend to select the entire business data, use the I_PaymentAdvice view instead. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-AR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CityName` |  | |  |  | `CHAR(25)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYTADVICECOMPANYCODEVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPACCVH'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.semanticKey:  [ 'CompanyCode' ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@VDM.viewType: #COMPOSITE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Payment Advice Company Code'
define view I_PaytAdviceCompanyCodeVH
  as select distinct from I_CompanyCodeVH
  
  association [0..1] to I_CompanyCode as _CompanyCode  on  _CompanyCode.CompanyCode = $projection.CompanyCode  
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
      @ObjectModel.text.element: ['CompanyCodeName']
      @UI.textArrangement: #TEXT_LAST
  key CompanyCode,
      @Search: {
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
      CompanyCodeName,
      CityName,
      Country,
      Currency,

      _Country,
      _Currency,
      _CompanyCode
}
```
