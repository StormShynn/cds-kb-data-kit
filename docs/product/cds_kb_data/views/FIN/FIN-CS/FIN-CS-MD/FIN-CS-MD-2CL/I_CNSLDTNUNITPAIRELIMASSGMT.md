---
name: I_CNSLDTNUNITPAIRELIMASSGMT
description: "Cnsldtnunitpairelimassgmt"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITPAIRELIMASSGMT

**Cnsldtnunitpairelimassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `ConsolidationUnitHierarchy` | ✓ | |  | `cast ( _Source.hryid as fincs_hryid_consunit )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast ( _Source.hryvalto as fincs_validityenddate preserving type )` |  |  |
| `ConsolidationUnit` | ✓ | |  | `cast ( _Source.rbunit as fincs_consolidationunit preserving type )` |  |  |
| `PartnerConsolidationUnit` | ✓ | |  | `cast ( _Source.rbuptr as fincs_partnerconsolidationunit preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast ( _Source.hryvalfrom as fincs_validitystartdate preserving type )` |  |  |
| `ConsolidationUnitForElim` |  | |  | `cast ( _Source.rbunit_eliminated as fincs_consolidationunitforelim preserving type )` |  |  |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
   },
   modelingPattern: #NONE,
   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #SQL_DATA_SOURCE ],
   sapObjectNodeType.name: 'CnsldtnUnitPairElimAssgmt'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Unit Pair Elimination Assignment'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnUnitPairElimAssgmt

  as select from fincs_cu_hier as _Source

{

  key cast ( _Source.hryid as fincs_hryid_consunit )                                       as ConsolidationUnitHierarchy,

      @Semantics.businessDate.to
  key cast ( _Source.hryvalto as fincs_validityenddate preserving type )                   as ValidityEndDate,

  key cast ( _Source.rbunit as fincs_consolidationunit preserving type )                   as ConsolidationUnit,

  key cast ( _Source.rbuptr as fincs_partnerconsolidationunit preserving type )            as PartnerConsolidationUnit,

      @Semantics.businessDate.from
      cast ( _Source.hryvalfrom as fincs_validitystartdate preserving type )               as ValidityStartDate,

      cast ( _Source.rbunit_eliminated as fincs_consolidationunitforelim preserving type ) as ConsolidationUnitForElim

}
```
