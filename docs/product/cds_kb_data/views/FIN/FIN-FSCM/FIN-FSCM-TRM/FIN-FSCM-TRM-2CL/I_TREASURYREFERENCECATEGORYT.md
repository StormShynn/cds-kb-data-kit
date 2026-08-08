---
name: I_TREASURYREFERENCECATEGORYT
description: "Treasuryreferencecategoryt"
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
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREFERENCECATEGORYT

**Treasuryreferencecategoryt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryReferenceCategory` | ✓ | |  | `reftyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TreasuryReferenceCategoryName` |  | |  | `txt30` |  |  |
| `TrsyReferenceCategoryShortName` |  | |  | `txt15` |  |  |
| `_TreasuryReferenceCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryReferenceCategory` | `I_TreasuryReferenceCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury Reference Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
    dataCategory: #TEXT,
    usageType : {
        sizeCategory: #S,
        serviceQuality: #A,
        dataClass: #META
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'TreasuryReferenceCategory',
    sapObjectNodeType.name: 'TreasuryReferenceCategory'
}
@Analytics: {
    dataExtraction:{
      enabled: true,
      delta.changeDataCapture: {
            automatic: true
      }
    }
}
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TreasuryReferenceCategoryT
  as select from atr1t as TreasuryReferenceCategoryText

  association [0..1] to I_TreasuryReferenceCategory as _TreasuryReferenceCategory on $projection.TreasuryReferenceCategory = _TreasuryReferenceCategory.TreasuryReferenceCategory
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TreasuryReferenceCategory'
  key TreasuryReferenceCategoryText.reftyp as TreasuryReferenceCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key TreasuryReferenceCategoryText.spras  as Language,
      /* end suppress warning shlporigin_not_inherited */
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      TreasuryReferenceCategoryText.txt30  as TreasuryReferenceCategoryName,
      @Semantics.text: true 
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW            
      TreasuryReferenceCategoryText.txt15  as TrsyReferenceCategoryShortName,


      _TreasuryReferenceCategory,
      _Language
}
```
