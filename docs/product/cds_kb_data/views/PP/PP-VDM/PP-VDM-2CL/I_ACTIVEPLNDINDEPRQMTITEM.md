---
name: I_ACTIVEPLNDINDEPRQMTITEM
description: "Activeplndindeprqmtitem"
semantic_vi: "View Activeplndindeprqmtitem hiển thị dữ liệu yêu cầu độc lập cho từng mục từ quy trình lập kế hoạch sản xuất, cho phép các nhà phát triển truy cập và chỉnh sửa chi tiết từng mục."
keywords:
  - "production planning"
  - "lập kế hoạch sản xuất"
  - "independent requirement"
  - "yêu cầu độc lập"
  - "item-level"
  - "mục từ"
  - "planned quantity"
  - "số lượng kế hoạch"
  - "withdrawal quantity"
  - "số lượng rút"
semantic_en: "The Activeplndindeprqmtitem view exposes independent requirement item data from the production planning process, allowing developers to access and manipulate item-level details."
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
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_ACTIVEPLNDINDEPRQMTITEM

**Activeplndindeprqmtitem**

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
| `PlndIndepRqmtInternalID` | ✓ | |  |  |  |  |
| `WorkingDayDate` | ✓ | |  |  |  |  |
| `PeriodType` |  | |  | `cast( case pbed.ForecastPeriodType when '1' then 'D' when '2' then 'W' when '3' then 'M' when '4' then 'P' when '5' then 'C' end as pph_period_type preserving type)` |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PlannedQuantity` |  | |  |  |  |  |
| `WithdrawalQuantity` |  | |  |  |  |  |
| `_ActivePlndIndepRqmt` | | ✓ | | | | |
| `_PeriodType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ActivePlndIndepRqmt` | `I_ActivePlndIndepRqmt` | [1..1] |
| `_PeriodType` | `I_PeriodType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IACTPIRIT'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'WorkingDayDate'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Active Planned Independent Requirement Item'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ActivePlndIndepRqmtItem
  as select from I_PlndIndepRqmtItemByIntKey  as pbed
  association [1..1] to I_ActivePlndIndepRqmt as _ActivePlndIndepRqmt on $projection.PlndIndepRqmtInternalID = _ActivePlndIndepRqmt.PlndIndepRqmtInternalID
  association [1..1] to I_PeriodType          as _PeriodType          on $projection.PeriodType = _PeriodType.PeriodType  

{
      @ObjectModel.foreignKey.association: '_ActivePlndIndepRqmt'
  key pbed.PlndIndepRqmtInternalID,
  key pbed.WorkingDayDate,

      @ObjectModel.foreignKey.association: '_PeriodType'       
      cast( case pbed.ForecastPeriodType
        when '1' then 'D'
        when '2' then 'W'
        when '3' then 'M'
        when '4' then 'P'
        when '5' then 'C'
      end as pph_period_type preserving type) as PeriodType,
      
      // Admin Data
      @Semantics.user.lastChangedBy: true
      pbed.LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      pbed.LastChangeDate,

      // Quantities and UoM
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      pbed.BaseUnit,     
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      pbed.PlannedQuantity,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      @Aggregation.default: #SUM
      pbed.WithdrawalQuantity,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _ActivePlndIndepRqmt,
      _PeriodType,
      pbed._UnitOfMeasure,
      pbed._LastChangedByUser
}
where _ActivePlndIndepRqmt.PlndIndepRqmtInternalID is not null;
```
