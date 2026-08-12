---
name: I_MAINTORDERPROCESSPHASETEXT
description: "Maintenance Order Process Phase - Text"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERPROCESSPHASETEXT')/$value
semantic_en: "Maintenance Order Process Phase - Text"
semantic_vi: "Maintenance Order Process Phase - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "maintenance"
  - "order"
  - "process"
  - "phase"
  - "text"
  - "processing"
  - "language"
  - "desc"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTORDERPROCESSPHASETEXT

**Maintenance Order Process Phase - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERPROCESSPHASETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast(dd07t.domvalue_l as pm_phase)` | `CHAR(1)` | Maintenance Processing Phase |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `MaintenanceProcessingPhaseDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_MaintenanceProcessingPhase` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERPROCESSPHASETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTORDERPROCESSPHASETEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Process Phase - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaintenanceProcessingPhase'
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_MaintOrderProcessPhaseText as select from dd07t

  association to parent I_MaintenanceOrderProcessPhase as _MaintenanceProcessingPhase on $projection.MaintenanceProcessingPhase = _MaintenanceProcessingPhase.MaintenanceProcessingPhase
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_MaintenanceProcessingPhase'
  key cast(dd07t.domvalue_l as pm_phase) as MaintenanceProcessingPhase,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                        as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.text.element: ['MaintenanceProcessingPhase']
      @Semantics.text: true
      dd07t.ddtext                      as MaintenanceProcessingPhaseDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
      _MaintenanceProcessingPhase,
      _Language
      
}
where
      dd07t.domname    = 'EAM_OSTAT_PHASE'
  and dd07t.as4local   = 'A'
  and dd07t.domvalue_l > '02'
```
