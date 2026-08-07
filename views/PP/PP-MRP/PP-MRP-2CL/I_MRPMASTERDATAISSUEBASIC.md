---
name: I_MRPMASTERDATAISSUEBASIC
description: Mrpmasterdataissuebasic
app_component: PP-MRP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MRP
  - interface-view
  - component:PP-MRP-2CL
  - lob:Manufacturing
---
# I_MRPMASTERDATAISSUEBASIC

**Mrpmasterdataissuebasic**

| Property | Value |
|---|---|
| App Component | `PP-MRP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Material` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `MRPArea` | ✓ | |  |  |
| `MRPMasterDataIssueSource` | ✓ | |  | `cast(coalesce( i.source_of_issue, 'H') as pph_source_of_issue preserving type )` |
| `MRPMasterDataIssueItemCount` | ✓ | |  | `cast(coalesce( i.counter, 0 ) as pph_counter preserving type )` |
| `SystemMessageIdentification` |  | |  | `cast(coalesce(i.msgid,'PPH_MRP') as msgid preserving type )` |
| `SystemMessageType` |  | |  | `cast(coalesce(i.msgty,'I') as msgty preserving type )` |
| `SystemMessageNumber` |  | |  | `cast(coalesce(i.msgno,'130') as msgno preserving type)` |
| `SystemMessageVariable1` |  | |  | `cast(i.msgv1 as ehprc_msgv1 preserving type)` |
| `SystemMessageVariable2` |  | |  | `cast(i.msgv2 as ehprc_msgv2 preserving type)` |
| `SystemMessageVariable3` |  | |  | `cast(i.msgv3 as ehprc_msgv3 preserving type)` |
| `SystemMessageVariable4` |  | |  | `cast(i.msgv4 as ehprc_msgv4 preserving type)` |
| `MRPMessageLogUUID` |  | |  | `cast(i.log_uuid as pph_mrp_log_uuid preserving type)` |
| `CreationDateTime` |  | |  | `cast(coalesce(i.timestamp,d.MaterialLastMRPDateTime) as pph_issue_created_timestamp preserving type )` |
| `MRPIssueIsAccepted` |  | |  | `cast(coalesce(i.isaccepted, '') as pph_issue_accepted preserving type )` |
| `MRPIssueAcceptedByUser` |  | |  | `cast(i.accepted_by as pph_issue_acc_uname preserving type )` |
| `MRPIssueAcceptanceDateTime` |  | |  | `cast(coalesce(i.accepted_at, 0) as pph_issue_acc_timestamp preserving type )` |
| `_Material` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_MaterialPlant` | | ✓ | | |
| `_MRPArea` | | ✓ | | |
| `_MRPMasterDataIssueSource` | | ✓ | | |
| `_AcceptedByUser` | | ✓ | | |
| `_PlantText` | | ✓ | | |
| `_MaterialText` | | ✓ | | |
| `_MRPAreaText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_MaterialPlant` | `I_ProductPlantBasic` | [1..1] |
| `_MRPArea` | `I_MRPArea` | [1..1] |
| `_MRPMasterDataIssueSource` | `I_MRPMasterDataIssueSource` | [0..1] |
| `_AcceptedByUser` | `I_User` | [0..1] |
| `_PlantText` | `I_Plant` | [1..1] |
| `_MaterialText` | `I_ProductText` | [1..*] |
| `_MRPAreaText` | `I_MRPArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_AcceptedByUser']
@Analytics.dataCategory: #FACT
@Analytics.technicalName: 'IMRPMDISSUEBAS'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'MRPMasterDataIssueItemCount'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE]
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Master Data Related Issues of an MRP Run'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MRPMasterDataIssueBasic
  as select from I_MRPAreaPlanningFileEntry as d
    left outer join pph_mrp_issues   as i on  i.matnr = d.Material
                                          and i.werks = d.Plant
                                          and i.berid = d.MRPArea
                                        
  association [1..1] to I_Product                  as _Material                 on  $projection.Material = _Material .Product
  association [1..1] to I_Plant                    as _Plant                    on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ProductPlantBasic        as _MaterialPlant            on  $projection.Material = _MaterialPlant.Product
                                                                                and $projection.Plant    = _MaterialPlant.Plant 
  association [1..1] to I_MRPArea                  as _MRPArea                  on  $projection.MRPArea = _MRPArea.MRPArea
  association [0..1] to I_MRPMasterDataIssueSource as _MRPMasterDataIssueSource on  $projection.MRPMasterDataIssueSource = _MRPMasterDataIssueSource.MRPMasterDataIssueSource 
  association [0..1] to I_User                     as _AcceptedByUser           on  $projection.MRPIssueAcceptedByUser = _AcceptedByUser.UserID
  -- start new associations for full coverage of text relations
  association [1..1] to I_Plant                    as _PlantText                on  $projection.Plant = _PlantText.Plant
  association [1..*] to I_ProductText              as _MaterialText             on  $projection.Material = _MaterialText.Product
  association [1..1] to I_MRPArea                  as _MRPAreaText              on  $projection.MRPArea = _MRPAreaText.MRPArea
  -- end new associations for full coverage of text relations
{
      // Key elements
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
  key d.Material                                   as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
  key d.Plant                                      as Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
      @ObjectModel.foreignKey.association: '_MRPArea'
  key d.MRPArea                                    as MRPArea,
      @ObjectModel.foreignKey.association: '_MRPMasterDataIssueSource'
  key cast(coalesce( i.source_of_issue, 'H') as pph_source_of_issue preserving type )
                                                   as MRPMasterDataIssueSource,
  key cast(coalesce( i.counter, 0 ) as pph_counter preserving type )
                                                   as MRPMasterDataIssueItemCount,
                                          
      // Issue details
      cast(coalesce(i.msgid,'PPH_MRP') as msgid preserving type )
                                                   as SystemMessageIdentification,
      cast(coalesce(i.msgty,'I') as msgty preserving type )
                                                   as SystemMessageType,
      cast(coalesce(i.msgno,'130') as msgno preserving type)
                                                   as SystemMessageNumber,
      cast(i.msgv1 as ehprc_msgv1 preserving type) as SystemMessageVariable1,
      cast(i.msgv2 as ehprc_msgv2 preserving type) as SystemMessageVariable2,
      cast(i.msgv3 as ehprc_msgv3 preserving type) as SystemMessageVariable3,
      cast(i.msgv4 as ehprc_msgv4 preserving type) as SystemMessageVariable4,
      cast(i.log_uuid as pph_mrp_log_uuid preserving type)
                                                   as MRPMessageLogUUID,
      @Semantics.systemDateTime.createdAt: true
      cast(coalesce(i.timestamp,d.MaterialLastMRPDateTime) as pph_issue_created_timestamp preserving type )
                                                   as CreationDateTime,
      cast(coalesce(i.isaccepted, '')  as pph_issue_accepted preserving type )
                                                   as MRPIssueIsAccepted,
      cast(i.accepted_by as pph_issue_acc_uname preserving type )
                                                   as MRPIssueAcceptedByUser,
      cast(coalesce(i.accepted_at, 0)  as pph_issue_acc_timestamp preserving type )
                                                   as MRPIssueAcceptanceDateTime,
                                          
      // Associations
      _Plant,
      _Material,
      _MaterialPlant,
      _MRPArea,
      _MRPMasterDataIssueSource,
      _AcceptedByUser,

      // Text relations
      _PlantText,
      _MaterialText,
      _MRPAreaText
}
where d.MRPPlanningScenario = '000';
```
