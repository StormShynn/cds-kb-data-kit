---
name: I_SUPLRACTIVITYSUPPLIERAPI01
description: Suplractivitysupplierapi 01
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - supplier
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPLRACTIVITYSUPPLIERAPI01

**Suplractivitysupplierapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrActyPartyUUID` | ✓ | |  |  |
| `SuplrActyUUID` |  | |  |  |
| `BusinessPartner` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `Supplier` |  | |  |  |
| `DataController1` |  | |  |  |
| `DataController2` |  | |  |  |
| `DataController3` |  | |  |  |
| `DataController4` |  | |  |  |
| `DataController5` |  | |  |  |
| `DataController6` |  | |  |  |
| `DataController7` |  | |  |  |
| `DataController8` |  | |  |  |
| `DataController9` |  | |  |  |
| `DataController10` |  | |  |  |
| `DataControllerSet` |  | |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier for Supplier Activity'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.sqlViewName: 'ISUPACTSUPAPI01'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
define view I_SuplrActivitySupplierAPI01
  as select from I_SupplierActivitySuplrParty
{

  key SuplrActyPartyUUID,
      SuplrActyUUID,
      BusinessPartner,
      AuthorizationGroup,
      
      @Consumption.hidden: true
      @UI.hidden: true
      Supplier,      
   
      @Consumption.hidden: true
      @UI.hidden: true
      DataController1,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController2,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController3,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController4,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController5,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController6,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController7,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController8,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController9,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController10,
      @Consumption.hidden: true
      @UI.hidden: true
      DataControllerSet
}
```
