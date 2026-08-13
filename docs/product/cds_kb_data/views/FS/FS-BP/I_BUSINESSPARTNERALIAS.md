---
name: I_BUSINESSPARTNERALIAS
description: "Business PartnerALIAS"
semantic_vi: "View Business Partner ALIAS hiển thị dữ liệu alias đối tác kinh doanh, có thể sử dụng để quản lý và duy trì alias đối tác kinh doanh trong thành phần chuỗi cung ứng tài chính (FS)."
keywords:
  - "business partner"
  - "alias"
  - "financial supply chain"
  - "fs-bp"
  - "lob other"
  - "bo businesspartner"
  - "sap cds view"
  - "partner"
  - "component fs-bp"
semantic_en: "The Business Partner ALIAS view exposes business partner alias data, which can be used to manage and maintain business partner aliases in the Financial Supply Chain (FS) component."
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
  - business-partner
  - partner
  - component:FS-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERALIAS

**Business PartnerALIAS**

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
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BPAliasPositionNumber` | ✓ | |  | `alposnr` |  |  |
| `BusinessPartnerAliasName` |  | |  | `alname` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPALIAS',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }

@ObjectModel: { usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL
                            },
                representativeKey: 'BPAliasPositionNumber',
                sapObjectNodeType.name: 'BusinessPartnerAlias',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION                                       
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true // For C1-Release
           }            
@AccessControl: { personalData.blocking: #REQUIRED,
                  authorizationCheck: #MANDATORY
                }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Alias'


define view I_BusinessPartnerAlias
  as select from bkk21
  association [1]    to I_BusinessPartner         as _BusinessPartner         on  $projection.BusinessPartner                = _BusinessPartner.BusinessPartner      // <--- to inherit authorizations in DCL
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on  $projection.BusinessPartner                = _BPFinancialServicesExtn.BusinessPartner // <--- to inherit authorizations in DCL
{
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner       as BusinessPartner,
  key alposnr       as BPAliasPositionNumber,
      alname        as BusinessPartnerAliasName,
      
      _BusinessPartner,
      _BPFinancialServicesExtn

}
```
