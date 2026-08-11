---
name: I_MAINTENANCEORDERPHASETEXT
description: "Maintenance Order Phase - Text"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASETEXT')/$value
semantic_en: "Maintenance Order Phase - Text"
semantic_vi: "Maintenance Order Phase Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "maintenance"
  - "order"
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
# I_MAINTENANCEORDERPHASETEXT

**Maintenance Order Phase - Text**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceProcessingPhase` | ✓ | |  | `cast(dd07t.domvalue_l as pm_phase)` | `CHAR(1)` | Maintenance Processing Phase |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `MaintenanceProcessingPhaseDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEORDERPHASETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Phase Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMAINTORDPHASET'
@ObjectModel.representativeKey: 'MaintenanceProcessingPhase'
@VDM.viewType: #BASIC

@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

define view entity I_MaintenanceOrderPhaseText as

select from dd07t as dd07t

association[0..1] to I_Language as _Language 
     on $projection.Language = _Language.Language
{
    @ObjectModel.text.element: [ 'MaintenanceProcessingPhaseDesc']
    key cast(dd07t.domvalue_l as pm_phase) as MaintenanceProcessingPhase,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key dd07t.ddlanguage as Language,  
    
    @Semantics.text: true
    dd07t.ddtext as MaintenanceProcessingPhaseDesc,
   
    // Associations
    _Language
}  where dd07t.domname = 'PM_PHASE' 
     and dd07t.as4local = 'A';
```
