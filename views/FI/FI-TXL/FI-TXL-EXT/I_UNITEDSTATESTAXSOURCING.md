---
name: I_UNITEDSTATESTAXSOURCING
description: Unitedstatestaxsourcing
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - tax
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_UNITEDSTATESTAXSOURCING

**Unitedstatestaxsourcing**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UnitedStatesTaxSourcing` | ✓ | |  | `cast(domvalue_l as fis_etxdc_sourcing)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnitedStatesTaxSourcingText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTAXSOURCE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'US External Tax Sourcing'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.internalName:#LOCAL 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'UnitedStatesTaxSourcing'
@ObjectModel.sapObjectNodeType.name: 'US_TaxSourcing'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_UnitedStatesTaxSourcing as select from dd07l

 association [0..*] to I_UnitedStatesTaxSourcingText as _Text on $projection.UnitedStatesTaxSourcing = _Text.UnitedStatesTaxSourcing
{
   @ObjectModel.text.association: '_Text'
   key cast(domvalue_l as fis_etxdc_sourcing) as UnitedStatesTaxSourcing,
   
   _Text
} 
where  dd07l.domname = 'FIS_ETXDC_SOURCING' 
   and dd07l.as4local = 'A';
```
