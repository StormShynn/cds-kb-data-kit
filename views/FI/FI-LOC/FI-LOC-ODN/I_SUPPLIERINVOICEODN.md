---
name: I_SUPPLIERINVOICEODN
description: Supplier InvoiceODN
app_component: FI-LOC-ODN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-ODN
  - interface-view
  - supplier
  - component:FI-LOC-ODN
  - lob:Finance
  - bo:Supplier
---
# I_SUPPLIERINVOICEODN

**Supplier InvoiceODN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-ODN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AFDFUniqueKeyUUID` | `AFDFUniqueKeyUUID` |
| key `SupplierInvoice` | `cast( AFDFDocumentKey1 as re_belnr )` |
| key `FiscalYear` | `cast( AFDFDocumentKey2 as gjahr )` |
| `OfficialDocumentNumberCountry` | `OfficialDocumentNumberCountry` |
| `OfficialDocumentNumberType` | `OfficialDocumentNumberType` |
| `OfficialDocumentNumber` | `OfficialDocumentNumber` |
| `OfficialDocumentNumberDateTime` | `OfficialDocumentNumberDateTime` |
| `ODNLegalDateTimeText` | `ODNLegalDateTimeText` |
| `OfficialDocumentNumberIntType` | `OfficialDocumentNumberIntType` |
| `OfficialDocumentNumberTypeText` | `OfficialDocumentNumberTypeText` |
| `_Country` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ODN in Supplier Invoice'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]
define view entity I_SupplierInvoiceODN
  as select from I_AdditionalFiscalDataODN
  association [0..*] to I_Country as _Country on  $projection.OfficialDocumentNumberCountry = _Country.Country  
{
  key AFDFUniqueKeyUUID,
  key cast( AFDFDocumentKey1 as re_belnr ) as SupplierInvoice,
  key cast( AFDFDocumentKey2 as gjahr ) as FiscalYear,
   @ObjectModel.foreignKey.association: '_Country'
      OfficialDocumentNumberCountry,
   @ObjectModel.text.element: ['OfficialDocumentNumberTypeText']
      OfficialDocumentNumberType,
      OfficialDocumentNumber,
      OfficialDocumentNumberDateTime,
      ODNLegalDateTimeText,
      OfficialDocumentNumberIntType,
      OfficialDocumentNumberTypeText,
      _Country  
}
where AFDFDocumentType = 'IDH'
```
