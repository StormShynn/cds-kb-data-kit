---
name: C_JITPRODNCONFPROFILEVH
description: "Jitprodnconfprofilevh"
semantic_vi: "View CDS Jitprodnconfprofilevh cung cấp danh sách các hồ sơ cấu hình sản xuất JIT, được sử dụng trong thành phần LE-JIT-S2C cho logistics thực thi. Nó được sử dụng để lấy và hiển thị các hồ sơ này cho các mục đích kinh doanh khác nhau."
keywords:
  - "jit production"
  - "logistics execution"
  - "le-jit-s2c"
  - "production configuration"
  - "sap cds view"
  - "view cds"
  - "hồ sơ cấu hình sản xuất jit"
  - "thực thi logistics"
  - "thành phần le-jit-s2c"
semantic_en: "The Jitprodnconfprofilevh CDS view provides a list of JIT production configuration profiles, which are used in the LE-JIT-S2C component for logistics execution. It is used to retrieve and display these profiles for various business purposes."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - consumption-view
  - value-help
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# C_JITPRODNCONFPROFILEVH

**Jitprodnconfprofilevh**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITProdnConfProfile` | ✓ | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck           : #NOT_REQUIRED
@EndUserText.label                          : 'JIT Production Confirmation Profile'
@Metadata.ignorePropagatedAnnotations       : true
@ObjectModel    :{ dataCategory             : #VALUE_HELP,
                   representativeKey        : 'JITProdnConfProfile',                  
                   supportedCapabilities    : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                   semanticKey              : [ 'JITProdnConfProfile'],
                   usageType                : { dataClass               : #META,
                                                serviceQuality          : #A,
                                                sizeCategory            : #S
                                              }
                 }
@VDM.viewType                               : #CONSUMPTION
@Search.searchable                          : true
define view entity C_JITProdnConfProfileVH
  as select from I_JITProdnConfProfile
{
      @ObjectModel.text.element:[ 'JITProdnConfProfileDesc' ]
      @UI.textArrangement: #TEXT_ONLY
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  key JITProdnConfProfile,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _Text[1:Language = $session.system_language].JITProdnConfProfileDesc
}
```
