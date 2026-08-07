---
name: I_PROCMTUSRDFLTREQNGGRPSAPI01
description: Procmtusrdfltreqnggrpsapi 01
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTUSRDFLTREQNGGRPSAPI01

**Procmtusrdfltreqnggrpsapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `UserID` | ✓ | |  | `Employee` |
| `PersonalizationID` | ✓ | |  |  |
| `BusinessObjectType` | ✓ | |  |  |
| `RequisitioningGroup` | ✓ | |  |  |
| `Employee` |  | | `_Employee` | `BPIdentificationNumber` |
| `AuthorizationGroup` |  | | `_Employee` | `AuthorizationGroup` |
| `IsBusinessPurposeCompleted` |  | | `_Employee` | `IsBusinessPurposeCompleted` |
| `DataControllerSet` |  | | `_Employee` | `DataControllerSet` |
| `DataController1` |  | | `_Employee` | `DataController1` |
| `DataController2` |  | | `_Employee` | `DataController2` |
| `DataController3` |  | | `_Employee` | `DataController3` |
| `DataController4` |  | | `_Employee` | `DataController4` |
| `DataController5` |  | | `_Employee` | `DataController5` |
| `DataController6` |  | | `_Employee` | `DataController6` |
| `DataController7` |  | | `_Employee` | `DataController7` |
| `DataController8` |  | | `_Employee` | `DataController8` |
| `DataController9` |  | | `_Employee` | `DataController9` |
| `DataController10` |  | | `_Employee` | `DataController10` |
| `BusinessPartner` |  | | `_Employee` | `BusinessPartner` |
| `_Employee` | | ✓ | | |
| `_Employee1` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Employee` | `I_BusinessUser` | [1..1] |
| `_Employee1` | `I_BusinessUserBasic` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUDREQGRPAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Default Reqng Grps for Users in Procmt'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.supportedCapabilities:[
#CDS_MODELING_ASSOCIATION_TARGET, 
#SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE] 
 
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_ProcmtUsrDfltReqngGrpsAPI01
  as select from I_UserRequisitioningGroups
  association [1..1] to I_BusinessUser as _Employee on $projection.UserID = _Employee.UserID
  association [1..1] to I_BusinessUserBasic      as _Employee1 on  $projection.UserID = _Employee1.UserID
{

  key I_UserRequisitioningGroups.Employee as UserID,
  key PersonalizationID                   as PersonalizationID,
  key BusinessObjectType                  as BusinessObjectType,
  key RequisitioningGroup                 as RequisitioningGroup,
      _Employee.BPIdentificationNumber    as Employee,
      
      @Consumption.hidden: true
      _Employee.AuthorizationGroup,
      @Consumption.hidden: true
      @Semantics.booleanIndicator: true
      _Employee.IsBusinessPurposeCompleted,
      
/////// Start of Datacontroller 10+1 fields - Only for DCL//////
      @Consumption.hidden:true
      _Employee.DataControllerSet                         as DataControllerSet,
      @Consumption.hidden:true
      _Employee.DataController1                           as DataController1,
      @Consumption.hidden:true
      _Employee.DataController2                           as DataController2,
      @Consumption.hidden:true
      _Employee.DataController3                           as DataController3,
      @Consumption.hidden:true
      _Employee.DataController4                           as DataController4,
      @Consumption.hidden:true
      _Employee.DataController5                           as DataController5,
      @Consumption.hidden:true
      _Employee.DataController6                           as DataController6,
      @Consumption.hidden:true
      _Employee.DataController7                           as DataController7,
      @Consumption.hidden:true
      _Employee.DataController8                           as DataController8,
      @Consumption.hidden:true
      _Employee.DataController9                           as DataController9,
      @Consumption.hidden:true
      _Employee.DataController10                          as DataController10,
      
      @Consumption.hidden:true
      _Employee.BusinessPartner,
      
////////////// End of Datacontroller 10+1 fields//////////       
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Employee1'
      @Consumption.hidden: true
      _Employee,
      
      @Consumption.hidden: true
      _Employee1 

}
```
