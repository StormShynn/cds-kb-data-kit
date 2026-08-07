---
name: I_BPPROTECTEDADDRESS
description: Bpprotectedaddress
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - address
  - component:AP-MD-BP
  - lob:Other
---
# I_BPPROTECTEDADDRESS

**Bpprotectedaddress**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |
| `AddressID` | ✓ | |  |  |
| `BPAddressIsProtected` |  | |  | `case when BPProtectedAddrUsageCount > 0 then cast('E' as bu_protected) when BPProtectedAddrUsageCount = 0 then cast(' ' as bu_protected) end` |
| `_BusinessPartner` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPROTADDR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Business Partner Protected Addresses'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPProtectedAddress
  as select from P_BPProtectedAddrUsageCount  
  association [1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key BusinessPartner,
  key AddressID,
  case
    when BPProtectedAddrUsageCount > 0
      then cast('E' as bu_protected)
    when BPProtectedAddrUsageCount = 0
      then cast(' ' as bu_protected)
  end as BPAddressIsProtected,
  
  _BusinessPartner
}
```
