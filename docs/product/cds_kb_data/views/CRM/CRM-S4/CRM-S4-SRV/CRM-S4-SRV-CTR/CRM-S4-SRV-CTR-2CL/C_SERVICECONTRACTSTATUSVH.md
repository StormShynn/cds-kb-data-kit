---
name: C_SERVICECONTRACTSTATUSVH
description: "Servicecontractstatusvh"
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - service
  - contract
  - status
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# C_SERVICECONTRACTSTATUSVH

**Servicecontractstatusvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContractStatus` | ✓ | |  | `cast( ServiceDocumentStatus as crms4_stat_lifecycle )` |  |  |
| `ServiceContractStatusName` |  | |  | `ServiceDocumentStatusName` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'ServiceContractStatus',
  usageType: {
    dataClass:      #META,
    serviceQuality: #B,
    sizeCategory:   #S
  },
  resultSet: {
    sizeCategory: #XS
  },
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
}
@EndUserText.label: 'Life Cycle Status of Service Contract'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceContractStatusVH 
  as select from I_ServiceDocumentStatusText 

{
      
      @UI.textArrangement: #TEXT_ONLY
      @ObjectModel.text.element: [ 'ServiceContractStatusName' ]  
  key cast( ServiceDocumentStatus as crms4_stat_lifecycle ) as ServiceContractStatus,
      @UI.hidden: true
      @Semantics.text: true
      ServiceDocumentStatusName                             as ServiceContractStatusName
}
where Language = $session.system_language
```
