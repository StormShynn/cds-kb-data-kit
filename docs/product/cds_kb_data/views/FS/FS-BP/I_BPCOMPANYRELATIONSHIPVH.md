---
name: I_BPCOMPANYRELATIONSHIPVH
description: "Bpcompanyrelationshipvh"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - value-help
  - component:FS-BP
  - lob:Other
---
# I_BPCOMPANYRELATIONSHIPVH

**Bpcompanyrelationshipvh**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPCompanyRelationship` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPCORELSHPVH',
                compiler.compareFilter: true
              }
@ObjectModel: { representativeKey: 'BPCompanyRelationship',
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                resultSet.sizeCategory: #XS,
                dataCategory: #VALUE_HELP,
                sapObjectNodeType.name: 'DE_BPOrgRelationshipCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #VALUE_HELP_PROVIDER,
                                          #SEARCHABLE_ENTITY  ],
                modelingPattern: #ANALYTICAL_DIMENSION 
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL
            }
@Metadata: { ignorePropagatedAnnotations: true,  // For C1-Release
             allowExtensions:true
           }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE
      }                         
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@EndUserText.label: 'Company Relationship of BP'
define view I_BPCompanyRelationshipVH
  as select from I_BPCompanyRelationship
{     
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ 'BPCompanyRelationshipDesc' ]
  key BPCompanyRelationship,

      _Text,
      @Semantics.text:true
      _Text[1:Language = $session.system_language ].BPCompanyRelationshipDesc
}
```
