---
name: I_SERVICEDOCUMENTITEMSUCCSSR_2
description: "Service DocumentUMENTITEMSUCCSSR 2"
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTITEMSUCCSSR_2

**Service DocumentUMENTITEMSUCCSSR 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentItmRelationUUID` | ✓ | |  | `relationid` |  |  |
| `ServiceDocItmRltnSqncNumber` | ✓ | |  | `posno` |  |  |
| `ServiceDocumentItemCharUUID` |  | |  | `cast(objkey_a as crms4_object_charguid32 preserving type )` |  |  |
| `ServiceDocItmSuccssrCharUUID` |  | |  | `cast(objkey_b as crms4_object_charguid32 preserving type )` |  |  |
| `ServiceDocumentItmRelationType` |  | |  | `breltyp` |  |  |
| `ServiceDocumentItemObjectType` |  | |  | `objtype_a` |  |  |
| `ServiceDocumentItmRelationKind` |  | |  | `vona_kind` |  |  |
| `ServiceDocItmSuccssrBusObjType` |  | |  | `objtype_b` |  |  |
| `_ServiceDocItm` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItm` | `I_ServiceDocumentItemEnhcd` | [1] |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Transaction of Srvc Trans Item'
@ClientHandling.algorithm: #SESSION_VARIABLE

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
                  //  filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000%'}],
                    table: 'crmd_brelvonai', role: #MAIN,
                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
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
  sqlViewName: 'ISERVDOCITMSUCC2',
  compiler.compareFilter: true ,
  preserveKey: true
}

@ObjectModel: {
//   representativeKey: 'ServiceDocumentItmRelationUUID',
   supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XL
   }
}

//@Analytics.dataCategory: #DIMENSION
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

//! Business Object SONT for the Service Document Item Successor
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentItemSuccessor'
/*
  1902 CE: Data preview might give you an error because hextobin conversion may not work on properly on junk data. Hence dump occurs.
  To view the data, you have to apply the condition "CharcLength = 32" to get the results for Service scenario only.

  1911 CE: DO not use hextobin converted attribute.

*/

/*
If there is any new Business object addition in service document view (e.g. BUS2000116 )
then the same business object has to be added in DCL "I_ServiceDocumentItemSuccessor" as well.
*/

define view I_ServiceDocumentItemSuccssr_2
  as select from crmd_brelvonai
  association [1] to I_ServiceDocumentItemEnhcd as _ServiceDocItm on $projection.ServiceDocItmSuccssrCharUUID = _ServiceDocItm.ServiceDocumentItemCharUUID

{
  key relationid                                                 as ServiceDocumentItmRelationUUID,
  key posno                                                      as ServiceDocItmRltnSqncNumber,

      /* CRMT_BRELVONAI */
      //      objkey_a   as ServiceDocumentItemCharUUID,
      cast(objkey_a as crms4_object_charguid32 preserving type ) as ServiceDocumentItemCharUUID,
      //      objkey_b   as ServiceDocItmSuccssrCharUUID,
      cast(objkey_b as crms4_object_charguid32 preserving type ) as ServiceDocItmSuccssrCharUUID,
      breltyp                                                    as ServiceDocumentItmRelationType,

      objtype_a                                                  as ServiceDocumentItemObjectType,
      vona_kind                                                  as ServiceDocumentItmRelationKind,
      objtype_b                                                  as ServiceDocItmSuccssrBusObjType,

      //Associations
      _ServiceDocItm

}
where
     objtype_b like 'BUS2000%'
  or objtype_b =    'VBAP'
```
