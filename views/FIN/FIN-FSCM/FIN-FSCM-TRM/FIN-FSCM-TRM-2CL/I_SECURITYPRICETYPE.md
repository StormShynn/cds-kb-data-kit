---
name: I_SECURITYPRICETYPE
description: Securitypricetype
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYPRICETYPE

**Securitypricetype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriceQuotationType` | ✓ | |  | `cast ( tw56.skursart as tba_pricetype)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SecurityPriceTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISECPRICET' 
@EndUserText.label: 'Market Data Security Price Type'  
@Analytics.internalName:#LOCAL
@VDM.viewType: #BASIC
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.representativeKey: 'PriceQuotationType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'SecurityPriceType'

define view I_SecurityPriceType 
   as select from tw56

   association [0..*] to I_SecurityPriceTypeText as _Text
      on $projection.PriceQuotationType = _Text.PriceQuotationType
{
@ObjectModel.text.association: '_Text'

key cast ( tw56.skursart as tba_pricetype) as PriceQuotationType,
           _Text

}
```
