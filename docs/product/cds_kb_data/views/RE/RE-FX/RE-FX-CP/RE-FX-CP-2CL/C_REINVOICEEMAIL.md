---
name: C_REINVOICEEMAIL
description: "Invoice Email Template"
app_component: RE-FX-CP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value
semantic_en: "Invoice Email Template"
semantic_vi: "Invoice Email Template — CDS view tiêu dùng dựa trên I_REInvoiceHeader."
keywords:
  - "invoice"
  - "email"
  - "template"
  - "company"
  - "code"
  - "number"
  - "fiscal"
  - "year"
  - "real"
  - "estate"
  - "contract"
  - "name"
tags:
  - RE
  - bo:billingdocument
  - component:RE-FX-CP-2CL
  - consumption-view
  - invoice
  - RE-FX
  - RE-FX-CP
  - RE-FX-CP-2CL
---
# C_REINVOICEEMAIL

**Invoice Email Template**

| Property | Value |
|---|---|
| App Component | `RE-FX-CP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `InvoiceNumber` | ✓ | |  | `cast ( REInvoiceNumber as idhu_issued_invoice_id )` | `CHAR(50)` | Issued Invoice ID |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `RealEstateContract` |  | |  | `cast( substring( StatusObject, 7, 13 ) as recnnumber )` | `CHAR(13)` | Contract Number |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `FiscalYearVariant` |  | | `_CompanyCode` | `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYear` | `I_FiscalYear` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REINVOICEEMAIL')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #CONSUMPTION
@ObjectModel: {
    usageType.dataClass: #MASTER,
    usageType.serviceQuality: #C,
    usageType.sizeCategory: #L,
    representativeKey: 'InvoiceNumber',
    semanticKey: ['InvoiceNumber', 'CompanyCode', 'RealEstateContract', 'FiscalYear'],
    supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ],
    modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
    }
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Invoice Email Template'
define view entity C_REInvoiceEmail
  as select from I_REInvoiceHeader
 
  association[0..1] to I_FiscalYear         as _FiscalYear          on $projection.FiscalYear = _FiscalYear.FiscalYear 
                                                                        and $projection.fiscalyearvariant = _FiscalYear.FiscalYearVariant 
  association[0..1] to I_FiscalYearVariant  as _FiscalYearVariant   on $projection.fiscalyearvariant = _FiscalYearVariant.FiscalYearVariant                                                   
{
        @ObjectModel.foreignKey.association: '_CompanyCode'
  key   CompanyCode,
  key cast ( REInvoiceNumber as idhu_issued_invoice_id )        as InvoiceNumber, //re-named in otder to avoid incoompatible chhanges with parameter determination,//
        @ObjectModel.foreignKey.association: '_FiscalYear'
  key   FiscalYear,
      
        cast( substring( StatusObject, 7, 13 ) as recnnumber )    as RealEstateContract,
        _CompanyCode.CompanyCodeName,
      
        @ObjectModel.foreignKey.association: '_FiscalYearVariant'
        _CompanyCode.FiscalYearVariant,
      
        _CompanyCode,
        _FiscalYear,
        _FiscalYearVariant
}
```
