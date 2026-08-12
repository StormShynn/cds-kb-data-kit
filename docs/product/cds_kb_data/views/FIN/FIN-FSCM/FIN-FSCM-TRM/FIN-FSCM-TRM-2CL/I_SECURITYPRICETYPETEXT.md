---
name: I_SECURITYPRICETYPETEXT
description: "Securitypricetypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYPRICETYPETEXT

**Securitypricetypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PriceQuotationType` | ✓ | |  | `cast ( tw56t.skursart as tba_pricetype)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PriceQuotationTypeName` |  | |  | `xkurzbez` |  |  |
| `_Language` | | ✓ | | | | |
| `_PriceQuotationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PriceQuotationType` | `I_SecurityPriceType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISECPRITT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.representativeKey: 'PriceQuotationType'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Market Data Security Price Type - Text'
define view I_SecurityPriceTypeText   
   as select from tw56t
   association [0..1] to I_Language as _Language  on $projection.Language = _Language.Language
   association [1..1] to I_SecurityPriceType as _PriceQuotationType
        on $projection.PriceQuotationType = _PriceQuotationType.PriceQuotationType
{
   key cast ( tw56t.skursart as tba_pricetype) as PriceQuotationType,
   @Semantics.language: true
   key tw56t.spras as Language, //text views shall always be language dependent
   @Semantics.text: true
   tw56t.xkurzbez as PriceQuotationTypeName,
   _PriceQuotationType,
   _Language

}
```
