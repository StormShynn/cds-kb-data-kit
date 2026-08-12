---
name: I_DISPUTECASELINKEDOBJECT
description: "Disputecaselinkedobject"
app_component: FIN-FSCM-DM-2CL
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
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - dispute
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_DISPUTECASELINKEDOBJECT

**Disputecaselinkedobject**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
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
| `LogicalSystem` | ✓ | |  | `logsys` |  |  |
| `ObjectType` | ✓ | |  | `obj_type` |  |  |
| `ObjectKey` | ✓ | |  | `obj_key` |  |  |
| `RelationToLinkedObject` | ✓ | |  | `cast ( relation as dispute_relationship preserving type )` |  |  |
| `DisputeCaseUUID` | ✓ | |  | `case_guid_loc` |  |  |
| `ObjectClassification` |  | |  | `classification` |  |  |
| `ObjectIsConfirmed` |  | |  | `is_confirmed` |  |  |
| `ObjectIsVoided` |  | |  | `is_voided` |  |  |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IDCLNKOBJ',
                compiler: { compareFilter: true } }
//                preserveKey: true }
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY }
@EndUserText: { label: 'Linked Objects of a Dispute Case' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                semanticKey: [ 'LogicalSystem', 
                               'ObjectType', 
                               'ObjectKey', 
                               'RelationToLinkedObject', 
                               'DisputeCaseUUID' ],
                supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DisputeCase' } }
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {
//    dataCategory: #FACT,
//    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view I_DisputeCaseLinkedObject
  as select from fdm_dcobj

{
      // VDM Fields
  key logsys                                                    as LogicalSystem,
  key obj_type                                                  as ObjectType,
  key obj_key                                                   as ObjectKey,
  key cast ( relation as dispute_relationship preserving type ) as RelationToLinkedObject,
  key case_guid_loc                                             as DisputeCaseUUID,

      classification                                            as ObjectClassification,
      is_confirmed                                              as ObjectIsConfirmed,
      is_voided                                                 as ObjectIsVoided

}
```
