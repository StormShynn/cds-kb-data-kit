---
name: I_CUSTOMERTAXCLASSIFICATION
description: "Customertaxclassification"
app_component: SD-BF-TX-2CL
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
  - SD
  - SD-BF
  - SD-BF-TX
  - interface-view
  - customer
  - tax
  - classification
  - component:SD-BF-TX-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERTAXCLASSIFICATION

**Customertaxclassification**

| Property | Value |
|---|---|
| App Component | `SD-BF-TX-2CL` |
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
| `CustomerTaxCategory` | ✓ | |  | `tatyp` |  |  |
| `CustomerTaxClassification` | ✓ | |  | `taxkd` |  |  |
| `_ConditionType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionType` | `I_ConditionType` | [0..1] |
| `_Text` | `I_CustomerTaxClassificationT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.sapObjectNodeType.name: 'CustomerTaxClassification'
@ObjectModel.representativeKey: 'CustomerTaxClassification'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Customer Tax Classification'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDCUSTTAXCLASS',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  },
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true

define view I_CustomerTaxClassification
as select from tskd

association [0..1] to I_ConditionType as _ConditionType       on $projection.CustomerTaxCategory       = _ConditionType.ConditionType
                                                             and _ConditionType.ConditionUsage         = 'A'
                                                             and _ConditionType.ConditionApplication   = 'V'
association [0..*] to I_CustomerTaxClassificationT as _Text   on $projection.CustomerTaxCategory       = _Text.CustomerTaxCategory
                                                             and $projection.CustomerTaxClassification = _Text.CustomerTaxClassification
{
    @ObjectModel.foreignKey.association: '_ConditionType'
    key tatyp as CustomerTaxCategory,
    
    @ObjectModel.text.association: '_Text'
    key taxkd as CustomerTaxClassification,
    
    //Association
    _ConditionType,
    _Text
};
```
