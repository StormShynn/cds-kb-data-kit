---
name: I_SUPLREVALSCCRDSUPPLIERAPI01
description: Suplrevalsccrdsupplierapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - supplier
  - component:SLC-EVL
  - lob:Other
  - bo:Supplier
---
# I_SUPLREVALSCCRDSUPPLIERAPI01

**Suplrevalsccrdsupplierapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SuplrEvalScorecardPtyUUID` | ✓ | |  |  |
| `SuplrEvalScorecardUUID` |  | |  |  |
| `BusinessPartner` |  | |  |  |
| `AuthorizationGroup` |  | |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |
| `DataControllerSet` |  | |  |  |
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
| `Supplier` |  | |  |  |
| `_Supplier` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISEVALSCSTYAPI01'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Supplier for Supplier Eval Scorecard'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities:
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SuplrEvalSccrdSupplierAPI01
  as select from I_SupplierEvalScorecardSuplr
{
  key SuplrEvalScorecardPtyUUID,
      SuplrEvalScorecardUUID,
      BusinessPartner,
      AuthorizationGroup,
      IsBusinessPurposeCompleted,
      @UI.hidden: true
      @Consumption.hidden: true
      DataControllerSet,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController1,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController2,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController3,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController4,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController5,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController6,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController7,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController8,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController9,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController10,

      @Consumption.hidden: true
      @UI.hidden: true
      Supplier,

      @Consumption.hidden: true
      _Supplier
}
```
