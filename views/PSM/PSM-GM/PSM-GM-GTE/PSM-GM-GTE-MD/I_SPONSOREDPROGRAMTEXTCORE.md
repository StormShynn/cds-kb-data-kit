---
name: I_SPONSOREDPROGRAMTEXTCORE
description: "Sponsoredprogramtextcore"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-GM
  - PSM-GM-GTE
  - interface-view
  - text
  - component:PSM-GM-GTE-MD
  - lob:Other
---
# I_SPONSOREDPROGRAMTEXTCORE

**Sponsoredprogramtextcore**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SponsoredProgram` | ✓ | |  | `sponsored_prog` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `SponsoredProgramDescription` |  | |  | `description` |  |  |
| `SponsoredProgramName` |  | |  | `sponsoredprogramname` |  |  |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGMSPPROGTXTCE'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true 
@ObjectModel.representativeKey: 'SponsoredProgram'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Sponsored Program - Text'
@ObjectModel.sapObjectNodeType.name: 'SponsoredProgramText'
@Analytics.dataExtraction.enabled: true
define view I_SponsoredProgramTextCore as select from gmspprogramtexts
  association [1..1] to I_SponsoredProgramCore as _SponsoredProgram on $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   {
  key sponsored_prog             as SponsoredProgram,      
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language                   as Language,
      @Semantics.text: true
      description                as SponsoredProgramDescription,
      @Semantics.text: true
      sponsoredprogramname as SponsoredProgramName,

      _SponsoredProgram,
      _Language
}
```
