---
name: I_CRDTMBUSPARTNERGROUPVH
description: "This CDS view is designed to provide a value help for business partner groups, allowing users to select from a predefined list of business partner group identifiers. It is optimized for use in user interfaces where a combobox or dropdown selection is needed, and it supports search functionality with a focus on usability and performance. This CDS view provides the data to answer the following business questions: What are the available business partner groups that can be assigned to a business partner? How can users efficiently search and select a business partner group from a list? What is the text description associated with each business partner group identifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSPARTNERGROUPVH')/$value
semantic_en: "This CDS view is designed to provide a value help for business partner groups, allowing users to select from a predefined list of business partner group identifiers. It is optimized for use in user interfaces where a combobox or dropdown selection is needed, and it supports search functionality with a focus on usability and performance. This CDS view provides the data to answer the following business questions: What are the available business partner groups that can be assigned to a business partner? How can users efficiently search and select a business partner group from a list? What is the text description associated with each business partner group identifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Partner Groups — CDS view cơ bản dựa trên I_CrdtMBusPartnerGroup."
keywords:
  - "business"
  - "partner"
  - "groups"
  - "crdt"
  - "mgmt"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - bo:project
---
# I_CRDTMBUSPARTNERGROUPVH

**This CDS view is designed to provide a value help for business partner groups, allowing users to select from a predefined list of business partner group identifiers. It is optimized for use in user interfaces where a combobox or dropdown selection is needed, and it supports search functionality with a focus on usability and performance. This CDS view provides the data to answer the following business questions: What are the available business partner groups that can be assigned to a business partner? How can users efficiently search and select a business partner group from a list? What is the text description associated with each business partner group identifier? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSPARTNERGROUPVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBusinessPartnerGroup` | ✓ | |  |  | `NUMC(4)` | Customer Credit Group |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSPARTNERGROUPVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSPARTNERGROUPVH')/$value)*

```abap
@EndUserText.label: 'Business Partner Groups'

@VDM: { viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata.ignorePropagatedAnnotations: true       // setting it to false will still not inherit the annotations from the entity view, so I have to repeat them
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { dataCategory: #VALUE_HELP,
                usageType: {  sizeCategory:   #S,           // inheriting from entity view didn't work; caused ATC errors, so I repeat them here
                              serviceQuality: #A,
                              dataClass: #CUSTOMIZING
                           },
                resultSet.sizeCategory: #XS,                // value help shall be displayed as combobox
                representativeKey: 'CrdtMgmtBusinessPartnerGroup',
                semanticKey: ['CrdtMgmtBusinessPartnerGroup'],
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
              }

@AbapCatalog: { sqlViewName: 'ICRDTMBPGRPVH',
                compiler: { compareFilter: true }
              }

@Consumption.valueHelpDefinition: [{entity.name: 'I_CrdtMBusPartnerGroup'}]
@Consumption: { ranked: true }
@Search: { searchable: true }

define view I_CrdtMBusPartnerGroupVH
  as select from I_CrdtMBusPartnerGroup
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #HIGH }
  key CrdtMgmtBusinessPartnerGroup as CrdtMgmtBusinessPartnerGroup,
      _Text
}
```
