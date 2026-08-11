---
name: I_CRDTMBUSINESSPARTNERVH
description: "This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value
semantic_en: "This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Business Partner in Credit Mgmt — CDS view tổng hợp (master data) dựa trên I_CrdtMBusinessPartner."
keywords:
  - "business"
  - "partner"
  - "credit"
  - "mgmt"
  - "name"
  - "first"
  - "last"
  - "organization"
  - "name1"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CRDTMBUSINESSPARTNERVH

**This CDS view is designed to provide a value help for business partners in the context of credit management. It serves as a composite view that aggregates and presents relevant information about business partners, including their names, addresses, and associated search terms. The view is optimized for searchability and includes various search criteria to facilitate finding specific business partners based on different attributes. This CDS view provides the data to answer the following business questions: How can I find and select business partners for credit management purposes? What are the names and details of business partners involved in credit management? How can I search for business partners using specific attributes such as first name, last name, organization name, country, or search terms? How can I ensure that blocked business partners are excluded from the data due to data privacy concerns? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | | `_BusinessPartnerVH` | `BusinessPartnerName` | `CHAR(81)` |  |
| `FirstName` |  | | `_BusinessPartner` | `FirstName` | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | | `_BusinessPartner` | `LastName` | `CHAR(40)` | Last Name of Business Partner (Person) |
| `OrganizationBPName1` |  | | `_BusinessPartner` | `OrganizationBPName1` | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | | `_BusinessPartner` | `OrganizationBPName2` | `CHAR(40)` | Name 2 of organization |
| `Country` |  | | `_CreditMgmtBPAddress` | `Country` | `CHAR(3)` | Country/Region of a Business Partner |
| `SearchTerm1` |  | | `_BusinessPartner` | `SearchTerm1` | `CHAR(20)` | Search Term 1 for Business Partner |
| `_BusinessPartnerVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerVH` | `I_BusinessPartnerVH` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTMBUSINESSPARTNERVH')/$value)*

```abap
@EndUserText.label: 'Business Partner in Credit Mgmt'

@AbapCatalog: { sqlViewName:               'ICRDTMBPVH',
                compiler: { compareFilter: true }
              }

@VDM: { viewType:                   #COMPOSITE,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }
      }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED        //data privacy, hide data from blocked business partners
                }

@ClientHandling: { type:      #INHERITED,
                   algorithm: #SESSION_VARIABLE
                 }

@ObjectModel: { dataCategory: #VALUE_HELP,
                usageType: {  dataClass:      #MASTER,
                              sizeCategory:   #XL,
                              serviceQuality: #C
                           },
                representativeKey:      'BusinessPartner',
                semanticKey:            ['BusinessPartner'],
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                modelingPattern: #VALUE_HELP_PROVIDER
              }
@Metadata.ignorePropagatedAnnotations:true
@Consumption: { ranked: true
//                valueHelpDefinition: [{ entity.name: 'I_CrdtMBusinessPartner' }]
              }
@Search.searchable: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_CrdtMBusinessPartnerVH
  as select from I_CrdtMBusinessPartner
  // Business Partner Value Help
  association [0..1] to I_BusinessPartnerVH as _BusinessPartnerVH on $projection.BusinessPartner = _BusinessPartnerVH.BusinessPartner //for DCL
{
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.86,
                 ranking:              #HIGH }
      @UI.lineItem: [{ importance: #HIGH }]
      @ObjectModel: { text: { element: [ 'BusinessPartnerName' ] } }
      @Consumption: { valueHelpDefinition: [ { association: '_BusinessPartnerVH' } ] }
  key BusinessPartner                        as BusinessPartner,

      //Display concatenated name for persons and organizations
      @Search: { defaultSearchElement: false }
      @Consumption.filter.hidden: true //Display only, dont filter. HDB can't filter on a concatenated field
      @Semantics: { name.fullName: true }
      @UI.lineItem: [{ importance: #HIGH }]
      @EndUserText.label: 'Business Partner Name'
      _BusinessPartnerVH.BusinessPartnerName as BusinessPartnerName,

      //Search the fields that contribute to the display-field BusinessPartnerName
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      _BusinessPartner.FirstName,

      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      _BusinessPartner.LastName,

      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      _BusinessPartner.OrganizationBPName1,

      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #LOW }
      _BusinessPartner.OrganizationBPName2,

      //Further search criteria
      @Search: { defaultSearchElement: true,
                 ranking:              #LOW,
                 fuzzinessThreshold:   0.8 }
      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CountryVH',
                                                     element: 'Country' } }]
      _CreditMgmtBPAddress.Country,

      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   1,    // exact matches only
                 ranking:              #LOW
               }
      _BusinessPartner.SearchTerm1,

      _BusinessPartnerVH //Needed for DCL
}
```
