---
name: I_BPTRADINGPARTNER
description: "Bptradingpartner"
semantic_vi: "View I_BPTRADINGPARTNER cung cấp truy cập dữ liệu đối tác thương mại, đây là dữ liệu quan trọng để thiết lập và quản lý mối quan hệ kinh doanh với đối tác bên ngoài. Nó được sử dụng trong ứng dụng thành phần FS-BP."
keywords:
  - "trading partner"
  - "đối tác thương mại"
  - "fs-bp"
  - "sap"
  - "cds view"
  - "partner data"
  - "business relationship"
  - "đối tác kinh doanh"
  - "cds"
  - "view"
semantic_en: "The I_BPTRADINGPARTNER view provides access to trading partner data, which is essential for establishing and managing business relationships with external partners. It is used in the FS-BP application component."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - partner
  - component:FS-BP
  - lob:Other
---
# I_BPTRADINGPARTNER

**Bptradingpartner**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingPartner` | ✓ | |  | `rcomp` |  |  |

## Source Code

```abap
@ObjectModel: { representativeKey: 'TradingPartner',
                dataCategory: #VALUE_HELP,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },              
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'TradingPartnerCompanyCode',           
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION  
              }
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true
           }      
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@AccessControl.authorizationCheck: #NOT_REQUIRED            
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Trading Partner of Business Partner'

define view entity I_BPTradingPartner as select from t880 {
   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   key t880.rcomp as TradingPartner  
}
```
