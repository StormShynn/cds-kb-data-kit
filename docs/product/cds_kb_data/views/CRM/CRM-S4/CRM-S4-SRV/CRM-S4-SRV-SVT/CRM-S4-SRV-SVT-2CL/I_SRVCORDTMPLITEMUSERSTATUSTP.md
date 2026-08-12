---
name: I_SRVCORDTMPLITEMUSERSTATUSTP
description: "Srvcordtmplitemuserstatustp"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - status
  - item-level
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLITEMUSERSTATUSTP

**Srvcordtmplitemuserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `ServiceOrderTemplateItem` | ✓ | |  |  |  |  |
| `UserStatus` | ✓ | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_ServiceOrderTemplateItemTP` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Order Temp Item User Status - TP'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define view entity I_SrvcOrdTmplItemUserStatusTP
  as projection on R_SrvcOrdTmplItemUserStatusTP
{
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,
  key UserStatus,
      StatusProfile,

      /* Associations */
      _StatusCode,
      _StatusProfile,

      _ServiceOrderTemplateItemTP : redirected to parent I_ServiceOrderTemplateItemTP,
      _ServiceOrderTemplateTP     : redirected to I_ServiceOrderTemplateTP
}
```
