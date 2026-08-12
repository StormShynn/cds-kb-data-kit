---
name: I_SUPLREVALRSPPTYADDRESSAPI01
description: "Suplrevalrspptyaddressapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - address
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALRSPPTYADDRESSAPI01

**Suplrevalrspptyaddressapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspPartyAddressUUID` | ✓ | |  |  |  |  |
| `SuplrEvalRspUUID` |  | |  |  |  |  |
| `SuplrEvalRspPartyUUID` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `Department` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERSPPTYADAPI01'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Party Address for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspPtyAddressAPI01
  as select from I_SupplierEvalRspPartyAddress
{
  key SuplrEvalRspPartyAddressUUID,
      SuplrEvalRspUUID,
      SuplrEvalRspPartyUUID,
      FullName,
      Department,
      PhoneNumber
}
```
