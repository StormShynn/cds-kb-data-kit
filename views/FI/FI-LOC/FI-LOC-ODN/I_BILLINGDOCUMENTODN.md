---
name: I_BILLINGDOCUMENTODN
description: Billing DocumentUMENTODN
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
  - billing-document
  - billing
  - document
  - component:FI-LOC-ODN
  - lob:Finance
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTODN

**Billing DocumentUMENTODN**

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
| key `BillingDocument` | `cast( AFDFDocumentKey1 as vbeln_vf )` |
| `OfficialDocumentNumberCountry` | `OfficialDocumentNumberCountry` |
| `OfficialDocumentNumberType` | `OfficialDocumentNumberType` |
| `OfficialDocumentNumber` | `OfficialDocumentNumber` |
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
@EndUserText.label: 'ODN in Billing Document'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]

define view entity I_BillingDocumentODN
  as select from I_AdditionalFiscalDataODN
  association [0..*] to I_Country as _Country on $projection.OfficialDocumentNumberCountry = _Country.Country
{
  key AFDFUniqueKeyUUID,
  key cast( AFDFDocumentKey1 as vbeln_vf ) as BillingDocument,
      @ObjectModel.foreignKey.association: '_Country'
      OfficialDocumentNumberCountry,
      @ObjectModel.text.element: ['OfficialDocumentNumberTypeText']
      OfficialDocumentNumberType,
      OfficialDocumentNumber,
      ODNLegalDateTimeText,
      OfficialDocumentNumberIntType,
      @Semantics.text: true
      OfficialDocumentNumberTypeText,
      _Country
}
where
  AFDFDocumentType = 'BDH'
```
