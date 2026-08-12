---
name: I_JITINBCALLCOMPGRPREFTEXT
description: "Jitinbcallcompgrpreftext"
app_component: LE-JIT-S2C
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
  - LE
  - LE-JIT
  - interface-view
  - text-view
  - text
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBCALLCOMPGRPREFTEXT

**Jitinbcallcompgrpreftext**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
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
| `JITReferenceTextUUID` | ✓ | |  | `db_key` |  |  |
| `RootDraftKey` |  | |  | `root_key` |  |  |
| `ParentDraftKey` |  | |  | `parent_key` |  |  |
| `InternalJITCallNumber` |  | |  | `int_call_num` |  |  |
| `JITCallItemNumber` |  | |  | `call_item_num` |  |  |
| `JITRefType` |  | |  | `refty` |  |  |
| `CompGrpNumber` |  | |  | `comp_grp_num` |  |  |
| `JITAdditionalReferenceText` |  | |  | `referencetext` |  |  |
| `_JITInboundCall` | | ✓ | | | | |
| `_JITReferenceType` | | ✓ | | | | |
| `_JITInbCallComponentGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInboundCall` | `I_JITInboundCall` | [1..1] |
| `_JITReferenceType` | `I_JITReferenceType` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Component Group Ref Txt'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITReferenceTextUUID',
                                            sapObjectNodeType.name  : 'JITInbCallCompGrpRefText',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass         : #TRANSACTIONAL,
                                                                        serviceQuality    : #A,
                                                                        sizeCategory      : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallCompGrpRefText
  as select from njit_call_d_rtxt

  association        to parent I_JITInbCallComponentGroup as _JITInbCallComponentGroup on $projection.ParentDraftKey = _JITInbCallComponentGroup.JITCallCompGrpUUID
  association [1..1] to I_JITInboundCall                  as _JITInboundCall           on $projection.RootDraftKey = _JITInboundCall.JITHeaderUUID
  association [0..1] to I_JITReferenceType                as _JITReferenceType         on $projection.JITRefType = _JITReferenceType.JITRefType

{

  key db_key        as JITReferenceTextUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      root_key      as RootDraftKey,
      @ObjectModel.foreignKey.association : '_JITInbCallComponentGroup'
      parent_key    as ParentDraftKey,
      int_call_num  as InternalJITCallNumber,
      call_item_num as JITCallItemNumber,
      @ObjectModel.foreignKey.association : '_JITReferenceType'
      refty         as JITRefType,
      comp_grp_num  as CompGrpNumber,
      referencetext as JITAdditionalReferenceText,

      //Associations
      _JITInbCallComponentGroup,
      _JITInboundCall,
      _JITReferenceType
}
where
      _JITInboundCall.JITScenario = '1'
  and comp_grp_num                is not initial
  and call_item_num               is initial
```
