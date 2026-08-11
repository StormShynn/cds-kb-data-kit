---
name: I_GRANTEEMGMTBDGTPHASETEXT
description: "Grantee Management Budget Phase - Text"
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASETEXT')/$value
semantic_en: "Grantee Management Budget Phase - Text"
semantic_vi: "Grantee Management Budget Phase - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "grantee"
  - "management"
  - "budget"
  - "phase"
  - "text"
  - "language"
  - "mgmt"
  - "bdgt"
  - "domain"
  - "value"
  - "name"
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-MD
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-MD
---
# I_GRANTEEMGMTBDGTPHASETEXT

**Grantee Management Budget Phase - Text**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `GranteeMgmtBdgtPhase` | ✓ | |  | `cast ( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as gm_bdgt_phase )` | `CHAR(1)` | Budget Phase |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `GranteeMgmtBdgtPhaseText` |  | |  | `cast ( substring ( dd07t.ddtext, 1, 45 ) as gmis_bdgt_phase_desc preserving type )` | `CHAR(45)` | Grantee Management Budget Phase Description |
| `DomainValueName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_GranteeMgmtBdgtPhase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRANTEEMGMTBDGTPHASETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMBDGTPHASET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Management Budget Phase - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'GranteeMgmtBdgtPhase',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_GranteeMgmtBdgtPhaseText
  as select from dd07t
  association        to parent I_GranteeMgmtBdgtPhase as _GranteeMgmtBdgtPhase on $projection.GranteeMgmtBdgtPhase = _GranteeMgmtBdgtPhase.GranteeMgmtBdgtPhase
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )    as Language,
      @ObjectModel.foreignKey.association: '_GranteeMgmtBdgtPhase'
      @ObjectModel.text.element: ['GranteeMgmtBdgtPhaseText']
  key cast ( cast ( substring( dd07t.domvalue_l, 1, 1 )
                    as abap.char( 1 ) ) as gm_bdgt_phase ) as GranteeMgmtBdgtPhase,
      @Consumption.hidden: true
      @Analytics.hidden: true
      dd07t.domvalue_l                                     as DomainValue,
      @Semantics.text: true
      cast ( substring ( dd07t.ddtext, 1, 45 )
             as gmis_bdgt_phase_desc preserving type )     as GranteeMgmtBdgtPhaseText,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07t.ddtext                                         as DomainValueName, 

      _GranteeMgmtBdgtPhase,
      _Language
}
where
      domname  = 'GM_BDGT_PHASE'
  and as4local = 'A'
```
