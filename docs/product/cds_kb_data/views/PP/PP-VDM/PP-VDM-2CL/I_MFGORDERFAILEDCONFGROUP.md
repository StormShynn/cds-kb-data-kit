---
name: I_MFGORDERFAILEDCONFGROUP
description: "Mfgorderfailedconfgroup"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERFAILEDCONFGROUP

**Mfgorderfailedconfgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `ConfirmationApplicationOrigin` | ✓ | |  |  |  |  |
| `FailedOrderConfirmationGroup` | ✓ | |  |  |  |  |
| `FailedOrderConfirmationGrpText` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastConfirmationDate` |  | |  |  |  |  |
| `LastConfirmedByUser` |  | |  |  |  |  |
| `_FailedOrderConfirmation` | | ✓ | | | | |
| `_ConfirmationApplOrigin` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_LastConfirmedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FailedOrderConfirmation` | `I_MfgOrderFailedConfirmation` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser', '_LastConfirmedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMFGORDFAILCNFGR'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'FailedOrderConfirmationGroup'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.semanticKey: ['ConfirmationApplicationOrigin', 'FailedOrderConfirmationGroup']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Mfg Order Failed Confirmation Group'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MfgOrderFailedConfGroup
    as select from I_FailedOrderConfirmationGroup as afrh

--  to child:
    association [1..*] to I_MfgOrderFailedConfirmation as _FailedOrderConfirmation on  $projection.ConfirmationApplicationOrigin = _FailedOrderConfirmation.ConfirmationApplicationOrigin
                                                                                   and $projection.FailedOrderConfirmationGroup  = _FailedOrderConfirmation.FailedOrderConfirmationGroup
{
      // Key
      @ObjectModel.foreignKey.association: '_ConfirmationApplOrigin'
  key afrh.ConfirmationApplicationOrigin,
      @ObjectModel.text.element: ['FailedOrderConfirmationGrpText']
  key afrh.FailedOrderConfirmationGroup,

      // Text
      @Semantics.text: true
      afrh.FailedOrderConfirmationGrpText,

      // Admin
      @Semantics.systemDate.createdAt: true
      afrh.CreationDate,
      @Semantics.user.createdBy: true
      afrh.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      afrh.LastChangeDate,
      @Semantics.user.lastChangedBy: true
      afrh.LastChangedByUser,
--    @Semantics.systemDate.lastChangedAt: true
      afrh.LastConfirmationDate,
--    @Semantics.user.lastChangedBy: true
      afrh.LastConfirmedByUser,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _FailedOrderConfirmation,
      _ConfirmationApplOrigin,
      _CreatedByUser,
      _LastChangedByUser,
      _LastConfirmedByUser
}
where ( ConfirmationApplicationOrigin = '2' or
        ConfirmationApplicationOrigin = '6' or //Manufacturing orders only
        ConfirmationApplicationOrigin = '8' ); //including results recording
```
