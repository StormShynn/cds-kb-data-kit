---
name: I_JNTVNTRPARCOMPANYOVERHEADTP
description: Jntvntrparcompanyoverheadtp
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTRPARCOMPANYOVERHEADTP

**Jntvntrparcompanyoverheadtp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `JointVenture` | `JointVenture` |
| key `JointVentureEquityType` | `JointVentureEquityType` |
| `JntVntrParentCoOvhdExpnCostCtr` | `JntVntrParentCoOvhdExpnCostCtr` |
| `JntVntrParentCoOvhdProject` | `JntVntrParentCoOvhdProject` |
| `JntVntrParentCoOvhdExpnOrder` | `JntVntrParentCoOvhdExpnOrder` |
| `_JointVenture` | *Association* |

## Source Code

```abap
@EndUserText.label: 'JVA Parent Company Overhead - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JntVntrParCompanyOverheadTP

  as projection on R_JntVntrParCompanyOverheadTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityType,

      JntVntrParentCoOvhdExpnCostCtr,
      JntVntrParentCoOvhdProject,
      JntVntrParentCoOvhdExpnOrder,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
