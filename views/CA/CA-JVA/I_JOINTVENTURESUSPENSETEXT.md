---
name: I_JOINTVENTURESUSPENSETEXT
description: Jointventuresuspensetext
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - text-view
  - text
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTURESUSPENSETEXT

**Jointventuresuspensetext**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JntVntrSuspenseStatus` | ✓ | |  | `cast (left(domvalue_l, 1) as jv_suspense_status_cds preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `JntVntrSuspenseStatusText` |  | |  | `cast( ddtext as jv_suspsts_text_cds preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJVSUSTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass: #MASTER,
  dataCategory:  #TEXT,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY],               
  representativeKey: 'JntVntrSuspenseStatus'
}
@EndUserText.label: 'Joint Venture Suspense - Text'
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_JointVentureSuspenseText
  as select from dd07t
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      //function "left" helps prevent a string truncation warning
      @ObjectModel.text.element: 'JntVntrSuspenseStatusText'
  key cast (left(domvalue_l, 1) as jv_suspense_status_cds preserving type) as  JntVntrSuspenseStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                  as  Language,
      @Semantics.text: true
      cast( ddtext  as jv_suspsts_text_cds preserving type )      as  JntVntrSuspenseStatusText,
      _Language
}
where
      domname  = 'JV_SUSPENSE_STATUS_CDS'
  and as4local = 'A'
```
