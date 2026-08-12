---
name: I_MRPCONTROLLER
description: "Mrpcontroller"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPCONTROLLER

**Mrpcontroller**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `MRPController` | ✓ | |  | `cast(t024d.dispo as pph_dispo preserving type)` |  |  |
| `MRPControllerName` |  | |  | `cast(t024d.dsnam as pph_dsnam preserving type)` |  |  |
| `MRPControllerPhoneNumber` |  | |  | `cast(t024d.dstel as pph_dstel preserving type)` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `UserID` |  | |  | `case t024d.usrtyp when 'US' then t024d.usrkey else '' end` |  |  |
| `_Plant` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_PlantText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPCONTROLLER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_User']
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPController'
@ObjectModel.sapObjectNodeType.name: 'MRPController'
@ObjectModel.semanticKey: ['Plant', 'MRPController']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'MRP Controller'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MRPController
  as select from t024d as t024d
  association [1..1] to I_Plant            as _Plant            on $projection.Plant = _Plant.Plant
  association [0..1] to I_PurchasingGroup  as _PurchasingGroup  on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_BusinessArea     as _BusinessArea     on $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_User             as _User             on $projection.UserID = _User.UserID

  association [1..1] to I_Plant            as _PlantText        on $projection.Plant = _PlantText.Plant
  association [0..*] to I_BusinessAreaText as _BusinessAreaText on $projection.BusinessArea = _BusinessAreaText.BusinessArea  
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key t024d.werks                                    as Plant,
      @ObjectModel.text.element: ['MRPControllerName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(t024d.dispo as pph_dispo preserving type) as MRPController,

      // Attributes
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t024d.dsnam as pph_dsnam preserving type) as MRPControllerName,
      cast(t024d.dstel as pph_dstel preserving type) as MRPControllerPhoneNumber,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'   
      t024d.ekgrp                                    as PurchasingGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      t024d.gsber                                    as BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      t024d.prctr                                    as ProfitCenter,
      case t024d.usrtyp
        when 'US'
          then t024d.usrkey
          else ''
      end as UserID,

      // Associations
      _Plant,
      _PurchasingGroup,
      _BusinessArea,
      _User,
      
      // Text relations
      _PlantText,
      _BusinessAreaText
};
```
