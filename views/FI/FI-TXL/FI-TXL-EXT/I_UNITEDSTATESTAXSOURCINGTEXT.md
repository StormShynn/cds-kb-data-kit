---
name: I_UNITEDSTATESTAXSOURCINGTEXT
description: Unitedstatestaxsourcingtext
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
  - text-view
  - tax
  - text
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_UNITEDSTATESTAXSOURCINGTEXT

**Unitedstatestaxsourcingtext**

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
| `Language` | ✓ | |  | `cast(ddlanguage as spras)` |  |  |
| `UnitedStatesTaxSourcingName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTAXSOURCETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'US External Tax Sourcing - Text'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@Analytics: { dataExtraction.enabled: true  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'UnitedStatesTaxSourcing'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_UnitedStatesTaxSourcingText as select from dd07t 
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: ['UnitedStatesTaxSourcingName']
  key cast(domvalue_l as fis_etxdc_sourcing) as UnitedStatesTaxSourcing,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast(ddlanguage as spras) as Language,

      @Semantics.text
      ddtext                    as UnitedStatesTaxSourcingName,

      _Language

}
where  dd07t.domname = 'FIS_ETXDC_SOURCING' 
   and dd07t.as4local = 'A';
```
