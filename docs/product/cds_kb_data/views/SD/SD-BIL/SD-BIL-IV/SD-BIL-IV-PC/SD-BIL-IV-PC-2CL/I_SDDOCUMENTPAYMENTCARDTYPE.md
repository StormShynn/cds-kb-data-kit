---
name: I_SDDOCUMENTPAYMENTCARDTYPE
description: "Sddocumentpaymentcardtype"
app_component: SD-BIL-IV-PC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SDDOCUMENTPAYMENTCARDTYPE

**Sddocumentpaymentcardtype**

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
| `PaymentCardAuthznPeriodDays` |  | |  | `cast( tgval as int4)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SDDocumentPaymentCardTypeT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentCardType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'SD Document Payment Card Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDOCPAYTCDTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #SINGLE
@AbapCatalog.preserveKey: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name: 'PaymentCardType'                                        
define view I_SDDocumentPaymentCardType
  as select from tvcin

  association [0..*] to I_SDDocumentPaymentCardTypeT as _Text on $projection.PaymentCardType = _Text.PaymentCardType
{
      @ObjectModel.text.association: '_Text'
  key ccins as PaymentCardType,
  cast( tgval as int4) as PaymentCardAuthznPeriodDays,
      //Association
      _Text
}
```
