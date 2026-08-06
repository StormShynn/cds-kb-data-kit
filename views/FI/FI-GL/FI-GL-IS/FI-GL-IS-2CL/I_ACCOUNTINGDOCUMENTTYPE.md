---
name: I_ACCOUNTINGDOCUMENTTYPE
description: Accounting DocumentUMENTTYPE
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTTYPE

**Accounting DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccountingDocumentType` | `cast ( blart as farp_blart preserving type )` |
| `AccountingDocumentNumberRange` | `numkr` |
| `AuthorizationGroup` | `brgru` |
| `ExchangeRateType` | `kurst` |
| `AllowedFinancialAccountTypes` | `koars` |
| `CustomerPostingIsAllowed` | `cast( xkoad as fis_xkoad preserving type )` |
| `SupplierPostingIsAllowed` | `cast( xkoak as fis_xkoak preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingDocumentTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Journal Entry Type'
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #CHECK

@AbapCatalog.sqlViewName: 'IFIACCDOCTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #GENERIC,
  numberOfKeyFields: 1
}
@AbapCatalog.preserveKey:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@ObjectModel: {representativeKey: 'AccountingDocumentType', 
               usageType: {
                            dataClass: #CUSTOMIZING,
                            serviceQuality: #A,
                            sizeCategory: #S
                           }
              } 
define view I_AccountingDocumentType as select from t003

association [0..*] to I_AccountingDocumentTypeText as _Text on $projection.AccountingDocumentType = _Text.AccountingDocumentType

{
 
  @ObjectModel.text.association: '_Text'
  key cast ( blart as farp_blart preserving type ) as AccountingDocumentType,
  numkr as AccountingDocumentNumberRange,
  brgru as AuthorizationGroup,
  kurst as ExchangeRateType,
  koars as AllowedFinancialAccountTypes,
  cast( xkoad as fis_xkoad preserving type ) as CustomerPostingIsAllowed,
  cast( xkoak as fis_xkoak preserving type ) as SupplierPostingIsAllowed,
  _Text
};
```
