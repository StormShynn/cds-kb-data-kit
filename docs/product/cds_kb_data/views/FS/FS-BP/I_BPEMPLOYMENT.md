---
name: I_BPEMPLOYMENT
description: "Bpemployment"
semantic_vi: "View Bpemployment cung cấp thông tin về chi tiết việc làm đối tác kinh doanh, bao gồm ngày bắt đầu và kết thúc, trạng thái và mã ngành công nghiệp. Nó được sử dụng để truy cập và quản lý dữ liệu việc làm đối tác kinh doanh."
keywords:
  - "business partner"
  - "employment details"
  - "bạn hàng kinh doanh"
  - "chi tiết việc làm"
  - "fs-bp"
  - "interface view"
  - "cds view"
  - "sap"
  - "lob other"
semantic_en: "The Bpemployment view provides information about business partner employment details, including start and end dates, status, and industry codes. It is used to access and manage employment data for business partners."
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
  - component:FS-BP
  - lob:Other
---
# I_BPEMPLOYMENT

**Bpemployment**

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
| `BusinessPartner` | ✓ | |  | `partnr` |  |  |
| `BPEmploymentStartDate` | ✓ | |  | `empl_since` |  |  |
| `BPEmploymentEndDate` |  | |  | `empl_until` |  |  |
| `BPEmploymentStatus` |  | |  | `employment` |  |  |
| `BusPartEmplrIndstryCode` |  | |  | `emp_sector_zgp` |  |  |
| `BusinessPartnerEmployerName` |  | |  | `employer` |  |  |
| `BusinessPartnerOccupationGroup` |  | |  | `jobgr_zgp` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_BPFinancialServicesExtn` | | ✓ | | | | |
| `_BPEmploymentStatus` | | ✓ | | | | |
| `_BPOccupationGroup` | | ✓ | | | | |
| `_BPEmploymentIndustry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |
| `_BPFinancialServicesExtn` | `I_BPFinancialServicesExtn` | [0..1] |
| `_BPEmploymentStatus` | `I_BPEmploymentStatus` | [0..1] |
| `_BPOccupationGroup` | `I_BPOccupationGroup` | [0..1] |
| `_BPEmploymentIndustry` | `I_BPEmploymentIndustry` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPEMPLOYMENT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #REQUIRED
                }
@ObjectModel: { representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'BusinessPartnerEmployment',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #XL
                           },
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
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions: true
           }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]           
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Employment of Business Partner'

define view I_BPEmployment
  as select from bp011
  association [1]    to I_BusinessPartner         as _BusinessPartner         on  $projection.BusinessPartner                = _BusinessPartner.BusinessPartner      // <--- to inherit authorizations in DCL
  association [0..1] to I_BPFinancialServicesExtn as _BPFinancialServicesExtn on  $projection.BusinessPartner                = _BPFinancialServicesExtn.BusinessPartner // <--- to inherit authorizations in DCL
  association [0..1] to I_BPEmploymentStatus      as _BPEmploymentStatus      on  $projection.BPEmploymentStatus             = _BPEmploymentStatus.BPEmploymentStatus
  association [0..1] to I_BPOccupationGroup       as _BPOccupationGroup       on  $projection.BusinessPartnerOccupationGroup = _BPOccupationGroup.BusinessPartnerOccupationGroup
  association [0..1] to I_BPEmploymentIndustry    as _BPEmploymentIndustry    on  $projection.BusPartEmplrIndstryCode        = _BPEmploymentIndustry.BusPartEmplrIndstryCode
 
{
  key bp011.partnr             as BusinessPartner,
      @Semantics.businessDate.from: true
  key bp011.empl_since         as BPEmploymentStartDate,
      @Semantics.businessDate.to: true
      bp011.empl_until         as BPEmploymentEndDate,
      bp011.employment         as BPEmploymentStatus,
      bp011.emp_sector_zgp     as BusPartEmplrIndstryCode,
      bp011.employer           as BusinessPartnerEmployerName,
      bp011.jobgr_zgp          as BusinessPartnerOccupationGroup,
      
      _BPEmploymentStatus,
      _BPOccupationGroup,
      _BPEmploymentIndustry,
      
      _BusinessPartner,
      _BPFinancialServicesExtn
}
```
