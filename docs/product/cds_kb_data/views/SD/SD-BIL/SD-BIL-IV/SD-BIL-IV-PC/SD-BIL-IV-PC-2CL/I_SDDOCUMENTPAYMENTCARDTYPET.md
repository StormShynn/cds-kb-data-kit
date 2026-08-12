---
name: I_SDDOCUMENTPAYMENTCARDTYPET
description: "Sddocumentpaymentcardtypet"
app_component: SD-BIL-IV-PC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - payment
  - document
  - component:SD-BIL-IV-PC-2CL
  - lob:Sales & Distribution
---
# I_SDDOCUMENTPAYMENTCARDTYPET

**Sddocumentpaymentcardtypet**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-PC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCardType` | ✓ | |  | `ccins` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentCardTypeName` |  | |  | `vtext` |  |  |
| `_PaymentCardType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaymentCardType` | `I_SDDocumentPaymentCardType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaymentCardType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'SD Document Payment Card Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCPAYTCDTYPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #SINGLE
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true 
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT   ]
define view I_SDDocumentPaymentCardTypeT 
as select from tvcint

association [0..1] to I_SDDocumentPaymentCardType as _PaymentCardType on $projection.PaymentCardType = _PaymentCardType.PaymentCardType
association [0..1] to I_Language                  as _Language        on $projection.Language = _Language.Language  
{
  @ObjectModel.foreignKey.association: '_PaymentCardType'
  key ccins    as PaymentCardType,
   
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras    as Language,
  
  @Semantics.text
  vtext        as PaymentCardTypeName,
  
  //Association
  _PaymentCardType,
  _Language
}
```
