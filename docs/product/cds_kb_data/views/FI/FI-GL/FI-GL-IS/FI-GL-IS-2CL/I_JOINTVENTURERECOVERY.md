---
name: I_JOINTVENTURERECOVERY
description: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
semantic_vi: "Joint Venture Recovery — CDS view giao diện dựa trên t8jj."
keywords:
  - "joint"
  - "venture"
  - "recovery"
  - "company"
  - "code"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_JOINTVENTURERECOVERY

**This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `JointVentureRecoveryCode` | ✓ | |  | `recid` | `CHAR(2)` | Recovery Indicator |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_JointVentureRecoveryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERY')/$value)*

```abap
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IFIJVR'
@ObjectModel.representativeKey: 'JointVentureRecoveryCode'
@EndUserText.label: 'Joint Venture Recovery'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
define view I_JointVentureRecovery
  as select from t8jj
  association [0..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_JointVentureRecoveryText as _Text        on  $projection.CompanyCode              = _Text.CompanyCode
                                                                   and $projection.JointVentureRecoveryCode = _Text.JointVentureRecoveryCode
{
      //--[ GENERATED:012:29JlHNUf7jY4ip7HtmZN9m
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key recid as JointVentureRecoveryCode,

      _CompanyCode,
      _Text
}
```
