---
name: I_PROCMTHUBCOMPANYCODE
description: PROCMTHUBCompany Code
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
  - company-code
  - component:MM-PUR-HUB-FND-2CL
  - lob:Sourcing & Procurement
  - bo:CompanyCode
---
# I_PROCMTHUBCOMPANYCODE

**PROCMTHUBCompany Code**

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
| `ProcmtHubCompanyCodeUniqueID` |  | |  | `be_cc_unique_id` |
| `ProcmtHubCompanyCodeName` |  | |  | `be_co_code_name` |
| `ProcurementHubSourceSystemName` |  | | `_ProcmtHubBackendSourceSystem` | `ProcurementHubSourceSystemName` |
| `_ProcmtHubBackendSourceSystem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubBackendSourceSystem` | `I_ProcmtHubBackendSourceSystem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.sqlViewName: 'IPROCMTHUBCC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ProcmtHubCompanyCode'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Co Code in Conncd Syst for Cntrl Procmt'
@ObjectModel.supportedCapabilities:[
#CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern : #NONE



define view I_ProcmtHubCompanyCode as select from mmpur_c_be_ccreg 

association [1..1] to  I_ProcmtHubBackendSourceSystem as _ProcmtHubBackendSourceSystem  on $projection.ProcurementHubSourceSystem = _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystem
{  
  @ObjectModel.foreignKey.association: '_ProcmtHubBackendSourceSystem'
  key  be_source_sys as ProcurementHubSourceSystem,   
  key  be_co_code as ProcmtHubCompanyCode, 
   be_cc_unique_id as ProcmtHubCompanyCodeUniqueID,
   @Semantics.text: true
   be_co_code_name as ProcmtHubCompanyCodeName,
   _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystemName,
   _ProcmtHubBackendSourceSystem
  
}
where cp_activate = 'X' and cp_delete <> 'X'
```
