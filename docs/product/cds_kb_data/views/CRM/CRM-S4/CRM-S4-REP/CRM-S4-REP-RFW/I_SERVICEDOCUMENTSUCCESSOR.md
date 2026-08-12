---
name: I_SERVICEDOCUMENTSUCCESSOR
description: "Service DocumentUMENTSUCCESSOR"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTSUCCESSOR

**Service DocumentUMENTSUCCESSOR**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentRelationUUID` | ✓ | |  | `relationid` |  |  |
| `ServiceDocRltnSequenceNumber` | ✓ | |  | `posno` |  |  |
| `ServiceDocumentRelationType` |  | |  | `breltyp` |  |  |
| `ServiceDocumentUUID` |  | |  | `objguid_a_sel` |  |  |
| `ServiceObjectType` |  | |  | `objtype_a_sel` |  |  |
| `ServiceDocumentRelationKind` |  | |  | `vona_kind` |  |  |
| `ServiceDocumentSuccessorUUID` |  | |  | `objguid_b_sel` |  |  |
| `ServiceDocSuccessor` |  | |  | `objkey_b_sel` |  |  |
| `ServiceDocSuccessorBusObjType` |  | |  | `objtype_b_sel` |  |  |
| `_ServiceDoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDoc` | `I_ServiceDocumentEnhcd` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Follow-Up Service Transaction'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_a', value: 'BUS2000%'}],
                    table: 'crmd_brelvonae', role: #MAIN,
                    viewElement: ['ServiceDocumentRelationUUID', 'ServiceDocRltnSequenceNumber'],
                    tableElement: ['relationid', 'posno']
                }
            ]
        }
    }
 }

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@AbapCatalog: {
  sqlViewName: 'ISERVDOCSUCC',
  compiler.compareFilter: true,
  preserveKey: true
}

@ObjectModel: {
//   representativeKey: 'ServiceDocumentRelationUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Successor
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentSuccessor'
/*
If there is any new Business object addition in service document view (e.g. BUS200016 )
then the same business object has to be added in DCL "I_ServiceDocumentSuccessor" as well.
*/
define view I_ServiceDocumentSuccessor
  as select from crmd_brelvonae

  association [1] to I_ServiceDocumentEnhcd as _ServiceDoc on  $projection.ServiceDocumentSuccessorUUID  = _ServiceDoc.ServiceDocumentUUID
                                                           and $projection.ServiceDocSuccessorBusObjType = _ServiceDoc.ServiceObjectType

{

  key relationid    as ServiceDocumentRelationUUID,
  key posno         as ServiceDocRltnSequenceNumber,
      breltyp       as ServiceDocumentRelationType,

      /* CRMT_BRELVONAE */
      objguid_a_sel as ServiceDocumentUUID,
      objtype_a_sel as ServiceObjectType,

      vona_kind     as ServiceDocumentRelationKind,

      objguid_b_sel as ServiceDocumentSuccessorUUID,
      objkey_b_sel  as ServiceDocSuccessor,
      objtype_b_sel as ServiceDocSuccessorBusObjType,

      //Associations
      _ServiceDoc

}
```
