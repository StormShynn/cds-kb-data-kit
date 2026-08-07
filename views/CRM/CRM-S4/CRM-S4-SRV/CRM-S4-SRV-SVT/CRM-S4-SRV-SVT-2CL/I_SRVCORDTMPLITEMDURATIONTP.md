---
name: I_SRVCORDTMPLITEMDURATIONTP
description: "Srvcordtmplitemdurationtp"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLITEMDURATIONTP

**Srvcordtmplitemdurationtp**

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
| `SrvcDocDurationType` | ✓ | |  |  |  |  |
| `SrvcDocDurationValue` |  | |  |  |  |  |
| `SrvcDocDurationUnit` |  | |  |  |  |  |
| `_ServiceOrderTemplateItemTP` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Tmpl Item Duration - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdTmplItemDurationTP
  as projection on R_SrvcOrdTmplItemDurationTP
{
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,
      /* Associations */
      _ServiceOrderTemplateItemTP : redirected to parent I_ServiceOrderTemplateItemTP,
      _ServiceOrderTemplateTP     : redirected to I_ServiceOrderTemplateTP
}
```
