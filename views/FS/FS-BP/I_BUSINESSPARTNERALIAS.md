---
name: I_BUSINESSPARTNERALIAS
description: Business PartnerALIAS
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
