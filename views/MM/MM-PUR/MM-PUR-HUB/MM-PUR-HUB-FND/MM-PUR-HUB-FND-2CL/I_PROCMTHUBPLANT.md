---
name: I_PROCMTHUBPLANT
description: Procmthubplant
app_component: MM-PUR-HUB-FND-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - plant
  - component:MM-PUR-HUB-FND-2CL
  - lob:Sourcing & Procurement
  - bo:Plant
---
# I_PROCMTHUBPLANT

**Procmthubplant**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-FND-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProcurementHubSourceSystem` | ✓ | |  | `be_source_sys` |
| `ProcmtHubCompanyCode` | ✓ | |  | `be_co_code` |
| `ProcmtHubPlant` | ✓ | |  | `be_plant` |
| `ProcmtHubPlantUniqueID` |  | |  | `be_plant_unique_id` |
| `ProcmtHubPlantName` |  | |  | `be_plant_name` |
| `ProcurementHubSourceSystemName` |  | | `_ProcmtHubBackendSourceSystem` | `ProcurementHubSourceSystemName` |
| `_ProcmtHubBackendSourceSystem` | | ✓ | | |
| `_ProcmtHubCompanyCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubBackendSourceSystem` | `I_ProcmtHubBackendSourceSystem` | [1..1] |
| `_ProcmtHubCompanyCode` | `I_ProcmtHubCompanyCode` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.sqlViewName: 'IPROCMTHUBPLT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Plant in Connected Syst for Cntrl Procmt'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ProcmtHubPlant'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@ObjectModel.supportedCapabilities:[
#CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE] 
@ObjectModel.modelingPattern : #NONE

define view I_ProcmtHubPlant as select from mmpur_c_be_plreg 

association [1..1] to  I_ProcmtHubBackendSourceSystem as _ProcmtHubBackendSourceSystem  on $projection.ProcurementHubSourceSystem = _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystem
association [1..1] to I_ProcmtHubCompanyCode as _ProcmtHubCompanyCode on  $projection.ProcmtHubCompanyCode = _ProcmtHubCompanyCode.ProcmtHubCompanyCode                //3252889
                                                                     and  $projection.ProcurementHubSourceSystem = _ProcmtHubCompanyCode.ProcurementHubSourceSystem      
{
  @ObjectModel.foreignKey.association: '_ProcmtHubBackendSourceSystem'
  key  be_source_sys as ProcurementHubSourceSystem, 
  @ObjectModel.foreignKey.association: '_ProcmtHubCompanyCode'                //3252889
  key  be_co_code as ProcmtHubCompanyCode, 
  @ObjectModel.text.element: ['ProcmtHubPlantName']
  key  be_plant as ProcmtHubPlant, 
  be_plant_unique_id as ProcmtHubPlantUniqueID,
  @Semantics.text: true
  be_plant_name as ProcmtHubPlantName, 
  _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystemName,
  _ProcmtHubBackendSourceSystem,
  _ProcmtHubCompanyCode
} where cp_activate = 'X' and cp_delete <> 'X'
```
