---
name: I_PROCMTUSERDFLTCATALOGSAPI01
description: "Procmtuserdfltcatalogsapi 01"
app_component: MM-PUR-REQ-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTUSERDFLTCATALOGSAPI01

**Procmtuserdfltcatalogsapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
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
| `UserID` | ✓ | |  | `Employee` |  |  |
| `PersonalizationID` | ✓ | |  |  |  |  |
| `BusinessObjectType` | ✓ | |  |  |  |  |
| `ProcmtCatalogID` | ✓ | |  | `PurReqnSSPCatalog` |  |  |
| `Employee` |  | | `_Employee` | `BPIdentificationNumber` |  |  |
| `AuthorizationGroup` |  | | `_Employee` | `AuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_Employee` | `IsBusinessPurposeCompleted` |  |  |
| `BusinessPartner` |  | | `_Employee` | `BusinessPartner` |  |  |
| `DataControllerSet` |  | | `_Employee` | `DataControllerSet` |  |  |
| `DataController1` |  | | `_Employee` | `DataController1` |  |  |
| `DataController2` |  | | `_Employee` | `DataController2` |  |  |
| `DataController3` |  | | `_Employee` | `DataController3` |  |  |
| `DataController4` |  | | `_Employee` | `DataController4` |  |  |
| `DataController5` |  | | `_Employee` | `DataController5` |  |  |
| `DataController6` |  | | `_Employee` | `DataController6` |  |  |
| `DataController7` |  | | `_Employee` | `DataController7` |  |  |
| `DataController8` |  | | `_Employee` | `DataController8` |  |  |
| `DataController9` |  | | `_Employee` | `DataController9` |  |  |
| `DataController10` |  | | `_Employee` | `DataController10` |  |  |
| `_Employee` | | ✓ | | | | |
| `_Employee1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Employee` | `I_BusinessUser` | [1..1] |
| `_Employee1` | `I_BusinessUserBasic` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUDCATALOGSAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Default Catalogs for Users in Procmt'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK 
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

define view I_ProcmtUserDfltCatalogsAPI01
  as select from I_ProcmtUserDefaultCatalogs
  association [1..1] to I_BusinessUser        as _Employee  on  $projection.UserID =  _Employee.UserID
  association [1..1] to I_BusinessUserBasic   as _Employee1 on  $projection.UserID = _Employee1.UserID
{
  key I_ProcmtUserDefaultCatalogs.Employee           as UserID,
  key I_ProcmtUserDefaultCatalogs.PersonalizationID  as PersonalizationID,
  key I_ProcmtUserDefaultCatalogs.BusinessObjectType as BusinessObjectType,
  key I_ProcmtUserDefaultCatalogs.PurReqnSSPCatalog  as ProcmtCatalogID,
      _Employee.BPIdentificationNumber               as Employee,
      @Consumption.hidden: true
      _Employee.AuthorizationGroup,
      @Consumption.hidden: true
      @Semantics.booleanIndicator: true
      _Employee.IsBusinessPurposeCompleted,
      @Consumption.hidden:true
      _Employee.BusinessPartner as BusinessPartner,
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
      
////////////// End of Datacontroller 10+1 fields//////////      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Employee1'
      @Consumption.hidden: true
      _Employee,
      
      @Consumption.hidden: true
      _Employee1 
}
```
